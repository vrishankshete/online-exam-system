import React from 'react';
import { Form, Button } from 'react-bootstrap'

export default class AdminLogin extends React.Component {
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
    render() {
        return (
            <Form>
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