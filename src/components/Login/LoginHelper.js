import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import * as actionCreator from './actions';
import {connect} from 'react-redux';
import * as loadingActionCreator from '../Loading/actions';
import { withRouter } from 'react-router-dom';
import config from '../../config/config.json';

export class LoginHelper extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            errorMessage:''
        }
    }

    setEmail(email) {
        this.setState({email});
    }
    setPassword(password) {
        this.setState({password});
    }
    validateForm(){
        return !(this.state.email.length > 0 && this.state.password.length > 0);
    }
    loginSubmitted(e){
        e.preventDefault();
        this.props.showLoading();
        let data={
            username:this.state.email,
            password:this.state.password
        }
        axios.post(config.serviceUrl + this.props.validateURL, data)
        .then(response => {
            console.log(response);
            response={ data: {
                    token:'testToken',
                    username:'',
                    isLoginSuccessful:"true"
                }
            };
            if(response.data.isLoginSuccessful == "true"){
                window.sessionStorage.setItem("sessionToken", response.data.token);
                this.props.history.push(this.props.successRedirect);
            } else {
                this.setState({notification:"Username or password is incorrect"});
                this.props.history.push('/error');
            }
            this.props.hideLoading();
        });
    }
    render() {
        return (
            <Form onSubmit={(e)=>this.loginSubmitted(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={this.state.email}
                        onChange={(e) => this.setEmail(e.target.value)}
                        type="email" 
                        placeholder="Enter email" 
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Password" 
                        value={this.state.password}
                        onChange={(e) => this.setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={this.validateForm()}>
                    Submit
                </Button>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToken:(token)=>dispatch(actionCreator.setToken(token)),
        showLoading:()=>dispatch(loadingActionCreator.showLoadingAction()),
        hideLoading:()=>dispatch(loadingActionCreator.hideLoadingAction())
    }
}
export default connect(null, mapDispatchToProps)(withRouter(LoginHelper));