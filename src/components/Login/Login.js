import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Link } from 'react-router-dom';

export default class Login extends React.Component{
    toAdmin(){
        this.props.history.push('/admin/login');
    }
    componentDidMount(){
        window.sessionStorage.removeItem("sessionToken");
        window.sessionStorage.removeItem("photoToken");
        window.sessionStorage.removeItem("username");
        window.sessionStorage.removeItem("userType");
    }
    
    render(){
        return (
            <ButtonToolbar>
                <Button as={Link} to="/student/login" variant='primary' size='lg' >
                    Student Login
                </Button>
                <Button as={Link} to="/teacher/login" variant='primary' size='lg'>
                    Teacher Login
                </Button>
                <Button as={Link} to="/admin/login" variant='primary' size='lg'>
                    Administrator Login
                </Button>
            </ButtonToolbar>
        );
    }
}