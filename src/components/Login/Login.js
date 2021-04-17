import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{
    toAdmin(){
        this.props.history.push('/admin');
    }
    
    render(){
        return (
            <ButtonToolbar>
                <Button as={Link} to="/student" variant='primary' size='lg' >
                    Student Login
                </Button>
                <Button as={Link} to="/teacher" variant='primary' size='lg'>
                    Teacher Login
                </Button>
                <Button as={Link} to="/admin" variant='primary' size='lg'>
                    Administrator Login
                </Button>
                <Button onClick={()=>{this.toAdmin()}} variant='primary' size='lg'>
                    Administrator2 Login
                </Button>
            </ButtonToolbar>
        );
    }
}