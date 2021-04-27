import React from 'react';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Form } from 'react-bootstrap';
import axios from 'axios';

class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount(){
        if(window.sessionStorage.getItem("sessionToken") == null){
            this.props.history.push('/login');
        }
    }
   
    CreateTest(){
        this.props.history.push('/teacher/addtest');
    }
    EvaluateTest(){
        this.props.history.push('/teacher/evaluatetest');
    }
    

    render(){
        return (
            <Container>
                Admin Dashboard
                <Row>
                <div  style={{'paddingTop':'150px','paddingRight':'50px'}}>
                <div class="card" style={{'height':'300px','width':'400px'}}>
                <div class="card-body">
                <h5 class="card-title" style={{'fontSize':'50px'}}>Create Test</h5>
                <div style={{'paddingBottom':'20px','paddingTop':'20px'}}>
                    <Button variant="primary" onClick={()=>this.CreateTest()}>Create Test</Button>
                </div>
                </div>
                </div>
                </div>
                <div style={{'paddingTop':'150px','paddingRight':'50px'}}>
                <div class="card" style={{'height':'300px','width':'400px'}}>
                <div class="card-body">
                <h5 class="card-title" style={{'fontSize':'50px'}}>Evaluate Test</h5>
                 <Button variant="primary" onClick={()=>this.EvaluateTest()}>Evaluate Test</Button>
                </div>
                </div>
                </div>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (rootState) => {
    return {
        sessionToken: rootState.login.get('sessionToken')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);