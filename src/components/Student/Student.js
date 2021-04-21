import React from 'react';
import {connect} from 'react-redux';
import * as loadingActionCreator from '../Loading/actions';
import Button from 'react-bootstrap/Button';
import { Container, Alert } from 'react-bootstrap';
import axios from 'axios';

class Student extends React.Component{

    constructor(props){
        super(props);
        this.state={
           studentData:{
                studentId:null,
                batchId:null,
                isTestScheduled:true,
                subQList:[],
                objQList:[]
           }
        }
    }

    componentDidMount() {
        let sampleData={
            studentId:1234,
            batchId:'1A',
            isTestScheduled:true,
            subQList:[],
            objQList:[]
        };
        this.props.showLoading();
        axios.get('http://slowwly.robertomurray.co.uk/delay/2000/url/https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>{
            this.setState({studentData:sampleData});
            this.props.hideLoading();
        })
        .catch(error=>console.log(error));
    }

    takeTest(){
        this.props.history.push('/student/test');
    }

    render(){
        return (
            <Container>
                {<div>
                    <Alert variant={'primary'}>
                            Batch Id:{this.state.studentData.batchId}
                            <br/>Student Id:{this.state.studentData.studentId}
                    </Alert>
                    {this.state.studentData.isTestScheduled
                    ?   <div>
                            <Alert variant={'primary'}>Test Scheduled for you.</Alert>
                            <Button variant="primary" onClick={()=>this.takeTest()}>
                                    Take Test
                            </Button>
                        </div>   
                    :   <Alert variant={'primary'}>
                            Test Not Scheduled for you yet
                        </Alert>
                    }
                </div>}
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