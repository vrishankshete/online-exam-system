import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './actions';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Form } from 'react-bootstrap';
import SubjectiveQ from './SubjectiveQ';
import ObjectiveQ from './ObjectiveQ';
import axios from 'axios';

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            subQ:'',
            objQ:'',
            op1:'',
            op2:'',
            op3:'',
            op4:'',
            success:false,
            batchId:'',
            error:''
        }
    }

    setsubQ(subQ) {
        this.setState({subQ});
    }
    setObjQ(objQ) {
        this.setState({objQ});
    }
    submitSubQ() {
        if(this.state.subQ.length<=0){
            this.setState({error:'Please enter Question text'});
        } else {
            this.props.subQAdded(this.state.subQ);
            this.setState({subQ:'', error:''});
        }
    }
    submitObjQ() {
        if(this.state.objQ.length<=0 || this.state.op1.length<=0 || this.state.op2.length<=0 || this.state.op3.length<=0 || this.state.op4.length<=0){
            this.setState({error:"Please enter Question and 4 options"})
        } else {
            this.props.objQAdded({
                q:this.state.objQ,
                options:[this.state.op1,this.state.op2,this.state.op3,this.state.op4]
            });
            this.setState({
                objQ:'',
                op1:'',
                op2:'',
                op3:'',
                op4:'',
                error:''
            });
        }
    }
    setOp1(op) {
        this.setState({op1:op});
    }
    setOp2(op) {
        this.setState({op2:op});
    }
    setOp3(op) {
        this.setState({op3:op});
    }
    setOp4(op) {
        this.setState({op4:op});
    }
    removeObjQ = (qNo) => {
        console.log("Remove Called ",qNo );
        this.props.deleteObjQ(qNo);
    }
    removeSubQ = (qNo) => {
        this.props.deleteSubQ(qNo);
    }

    submitQPaper(){
        if((this.props.objQList.size>0 || this.props.subQList.size>0) && this.state.batchId.length>0){
            this.setState({error:""});
            const data = { objQList:this.props.objQList, subQList:this.props.subQList, batchId:this.state.batchId };
            axios.post('https://reqres.in/api/articles', data)
                .then(response => { console.log(response); this.setState({ success: true })});
        } else {
            this.setState({error:"Please enter the required data"});
        }
    }

    setBatchId(batchId) {
        this.setState({batchId});
    }
    
    render(){
        return (
            <Container>
                {this.state.success?<div>SUCCESS</div>:<div></div>}
                {this.state.error.length>0?<div>{this.state.error}</div>:<div></div>}
                <Form.Label>Batch Id</Form.Label>
                <Form.Control
                    value={this.state.batchId}
                    onChange={(e) => this.setBatchId(e.target.value)}
                    className={"invalid"}
                />
                <Row>
                    <Col sm={4}>
                        <Form>
                            <Form.Group controlId="formBasicSubQ">
                                <Form.Label>Subjective Question No {this.props.subQList.size+1}</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    value={this.state.subQ}
                                    onChange={(e) => this.setsubQ(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={()=>this.submitSubQ()}>
                                Add Question
                            </Button>
                            <Form.Group controlId="formBasicObjQ">
                                <Form.Label>Objective Question No {this.props.objQList.size+1}</Form.Label>
                                <Form.Control as="textarea" rows={1}
                                    value={this.state.objQ}
                                    onChange={(e) => this.setObjQ(e.target.value)}
                                />
                                <Form.Label>Options</Form.Label>
                                <Form.Control 
                                    required
                                    type="text"
                                    placeholder="Option A" 
                                    value={this.state.op1}
                                    onChange={(e) => this.setOp1(e.target.value)}
                                    
                                />
                                <Form.Control 
                                    placeholder="Option B" 
                                    value={this.state.op2}
                                    onChange={(e) => this.setOp2(e.target.value)}
                                />
                                <Form.Control 
                                    placeholder="Option C" 
                                    value={this.state.op3}
                                    onChange={(e) => this.setOp3(e.target.value)}
                                />
                                <Form.Control 
                                    placeholder="Option D" 
                                    value={this.state.op4}
                                    onChange={(e) => this.setOp4(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={()=>this.submitObjQ()}>
                                Add Question
                            </Button>
                        </Form>
                        <Button variant="primary" onClick={()=>this.submitQPaper()}>
                                Submit All Questions
                        </Button>
                    </Col>
                    <Col sm={8} style={{'overflowY': 'auto','height': '500px'}}>
                        <Row>Subjective Questions</Row>  
                        {this.props.subQList.map((element, index)=>
                            <SubjectiveQ q={element} qNo={index} remFunc={this.removeSubQ}></SubjectiveQ>
                        )}
                        <hr></hr>
                        <Row>Objective Questions</Row>
                        {this.props.objQList.map((element, index)=>
                            <ObjectiveQ q={element} qNo={index} remFunc={this.removeObjQ}></ObjectiveQ>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (rootState) => {
    return {
        subQList: rootState.teacher.get('subQList'),
        objQList: rootState.teacher.get('objQList')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        objQAdded:(q)=>dispatch(actionCreator.objQAdded(q)),
        subQAdded:(q)=>dispatch(actionCreator.subQAdded(q)),
        deleteObjQ:(qNo)=>dispatch(actionCreator.deleteObjQ(qNo)),
        deleteSubQ:(qNo)=>dispatch(actionCreator.deleteSubQ(qNo)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);