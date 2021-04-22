import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './actions';
import * as loadingActionCreator from '../Loading/actions';
import SubjectiveQ from './SubjectiveQ';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import ObjectiveQ from './ObjectiveQ';

class Student extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notification:null
        }
    }

    submitAnswers(){
        let data = {
            subAns: this.props.subAnsList.toArray(),
            objAns: this.props.objAnsList.toArray()
        }
        axios.post('https://reqres.in/api/articles', data)
        .then(response => {
            console.log(response);
            this.setState({notification:"Success"});
        });
    }

    render(){
        return (
            <Container>
                {this.state.notification ? <Row>{this.state.notification}</Row> : <div></div>}
                <Row>
                    <Col>
                        {/* <Button onClick={()=>this.setState({openObjCollapse:!this.state.openObjCollapse})}>
                            Toggle Objective Questions
                        </Button>
                        <Collapse in={this.state.openObjCollapse}> */}
                            <div id="Test">
                            {this.props.objQList.map((element, index)=>
                                <ObjectiveQ key={`obj${index}`} q={element} qNo={index} objAns={(index, answer)=>this.props.objAnsSelected({index, answer})}></ObjectiveQ>
                            )}
                            </div>
                        {/* </Collapse> */}
                    </Col>
                    <Col>
                        {/* <Button onClick={()=>this.setState({openSubCollapse:!this.state.openSubCollapse})}>
                            Toggle Subjective Questions
                        </Button> */}
                        {/* <Collapse in={this.state.openSubCollapse}> */}
                            <div id="Test">
                            {this.props.subQList.map((element, index)=>
                                <SubjectiveQ key={`sub${index}`} q={element} qNo={index} subAns={(index, answer)=>this.props.subAnsSelected({index, answer})}></SubjectiveQ>
                            )}
                            </div>
                        {/* </Collapse> */}
                    </Col>
                </Row>
                
                <Button variant="primary" onClick={()=>this.submitAnswers()}>
                    Submit Answers
                </Button>
            </Container>
        );
    }
}

const mapStateToProps = (rootState) => {
    return {
        isLoading: rootState.loading.get('isLoading'),
        studentId: rootState.student.get('studentId'),
        batchId: rootState.student.get('batchId'),
        subQList: rootState.student.get('subQList'),
        objQList: rootState.student.get('objQList'),
        subAnsList: rootState.student.get('subAnsList'),
        objAnsList: rootState.student.get('objAnsList'),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showLoading:()=>dispatch(loadingActionCreator.showLoadingAction()),
        hideLoading:()=>dispatch(loadingActionCreator.hideLoadingAction()),
        objAnsSelected:(ans)=>dispatch(actionCreator.objAnsSelected(ans)),
        subAnsSelected:(ans)=>dispatch(actionCreator.subAnsSelected(ans))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);