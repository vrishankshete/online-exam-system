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
   
    render(){
        return (
            <Container>
                Admin Dashboard
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