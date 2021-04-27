import React from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './actions';
import * as loadingActionCreator from '../Loading/actions';
import Button from 'react-bootstrap/Button';
import { Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import config from '../../config/config.json';

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
            subQList:["QSample 1", "QSample 2"],
            objQList:[{
                q:"Example Question",
                options:["this", "that", "here", "there"]
            },
            {
                q:"Example Question No 2",
                options:["Option1", "Op2", "Op3", "OOPP4"]
            },
            {
                q:"Example Question No 2",
                options:["Option1", "Op2", "Op3", "OOPP4"]
            },
            {
                q:"Example Question No 2",
                options:["Option1", "Op2", "Op3", "OOPP4"]
            }]
        };
        this.props.showLoading();
        // const url='http://slowwly.robertomurray.co.uk/delay/2000/url/https://jsonplaceholder.typicode.com/todos/1'
        // axios.get(config.serviceUrl + '/studentdata')
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>{
            response.data = sampleData;
            this.setState({studentData:response.data});
            this.props.hideLoading();
            this.props.studentDataLoaded(response.data);
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
        hideLoading:()=>dispatch(loadingActionCreator.hideLoadingAction()),
        studentDataLoaded:(data)=>dispatch(actionCreator.studentDataLoaded(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Student);