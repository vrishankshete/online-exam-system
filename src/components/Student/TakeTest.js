import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './actions';
import * as loadingActionCreator from '../Loading/actions';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Form, Alert, Collapse } from 'react-bootstrap';
import axios from 'axios';

class Student extends React.Component{

    constructor(props){
        super(props);
        this.state={
            openSubCollapse:false,
            openObjCollapse:false,
            studentData:{
                studentId:null,
                batchId:null,
                isTestScheduled:true,
                subQList:[],
                objQList:[]
           }
        }
    }

    // componentDidMount() {
    //     this.props.showLoading();
    //     axios.get('http://slowwly.robertomurray.co.uk/delay/5000/url/https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response=>{
    //         this.setState({studentData:response.data});
    //         this.props.hideLoading();
    //     })
    //     .catch(error=>console.log(error));
    // }

    takeTest(){
        this.props.history.push('/student/test');
    }

    render(){
        return (
            <Container>
                <Row>
                    <Col>
                        <Button onClick={()=>this.setState({openObjCollapse:!this.state.openObjCollapse})}>
                            Toggle Objective Questions
                        </Button>
                        <Collapse in={this.state.openObjCollapse}>
                            <div id="Test">
                            Obj Q List
                            </div>
                        </Collapse>
                    </Col>
                    <Col>
                        <Button onClick={()=>this.setState({openSubCollapse:!this.state.openSubCollapse})}>
                            Toggle Subjective Questions
                        </Button>
                        <Collapse in={this.state.openSubCollapse}>
                            <div id="Test">
                            Sub Q List
                            </div>
                        </Collapse>
                    </Col>
                </Row>
                
                
            </Container>
        );
    }
}

const mapStateToProps = (rootState) => {
    return {
        isLoading: rootState.loading.get('isLoading')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showLoading:()=>dispatch(loadingActionCreator.showLoadingAction()),
        hideLoading:()=>dispatch(loadingActionCreator.hideLoadingAction())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);