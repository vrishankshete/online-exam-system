import React from 'react';
import { Form, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import * as actionCreator from './actions';
import {connect} from 'react-redux';
import * as loadingActionCreator from '../Loading/actions';
import { withRouter } from 'react-router-dom';
import config from '../../config/config.json';

export class CreateStudent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            first_name : '',
            last_name :'',
            middle_name : '',
            login_id : '',
            password :'',
            id_photo : null,
            year :'',
            dept : '',
            roll_no : ''
        }
    //    this.handleChange = this.handleChange.bind(this)
    }
    //handleChange(event) {
     //   this.setState({
     //     id_photo: URL.createObjectURL(event.target.files[0])
     //   })
     // }
    setRoll(roll_no) {
        this.setState({roll_no});
    }
    setDept(dept) {
        this.setState({dept});
    }
    setYear(year) {
        this.setState({year});
    }
    setId(id_photo) {
        this.setState({id_photo});
    }
    setLogin(login_id) {
        this.setState({ login_id});
    }
    setPassword(password) {
        this.setState({password});
    }
    setLast(last_name) {
        this.setState({last_name});
    }
    setMiddle(middle_name) {
        this.setState({middle_name});
    }
    setFirst(first_name) {
        this.setState({first_name});
    }
    
    validateForm(){
        return !(this.state.login_id.length > 0 && this.state.first_name.length > 0 && this.state.middle_name.length > 0 && this.state.last_name.length > 0 && this.state.password.length > 0 && this.state.year.length > 0 && this.state.dept.length > 0 && this.state.roll_no.length > 0 );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.showLoading();
        const {first_name, last_name, middle_name, login_id,password,year,dept,roll_no} = this.state; 
        console.log("Photo:  ",this.state.id_photo);
        let form_data = new FormData();
        form_data.append('image', this.state.id_photo, this.state.id_photo.name);
        form_data.append('data', {
            first_name, last_name, middle_name, login_id,password,year,dept,roll_no
        });
        console.log("Form Data: ", form_data);
        axios.post(config.serviceUrl, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }).then(res => {
            console.log(res.data);
            this.props.hideLoading();
        }).catch(err => {
            console.log(err);
            this.props.hideLoading();
        })
      };

    render() {
        return (
            <Form onSubmit={(e)=>this.handleSubmit(e)} style={{'paddingLeft':'600px'}}>
                <h1 style={{'fontSize':'20px'}}>Create Student</h1>
                <Form.Group controlId="formBasicfirstname" style={{'paddingTop':'20px'}}>
                    <Form.Label>First</Form.Label>
                    <Form.Control
                        value={this.state.first_name}
                        onChange={(e) => this.setFirst(e.target.value)}
                        type="text" 
                        placeholder="Firstname"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicMiddleName">
                    <Form.Label>Middle name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Middename" 
                        value={this.state.middle_name}
                        onChange={(e) => this.setMiddle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasiclastname">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Last name" 
                        value={this.state.last_name}
                        onChange={(e) => this.setLast(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasiclogin">
                    <Form.Label>Login id</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Login-Id" 
                        value={this.state.login_id}
                        onChange={(e) => this.setLogin(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Password" 
                        value={this.state.password}
                        onChange={(e) => this.setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicUpoadphoto">
                    <Form.Label>Upload Photo</Form.Label>
                    <Form.Control 
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={(e) => this.setId(e.target.files[0])}
                        required
                    />
                    {this.state.id_photo ? <Image width={'100px'} src={URL.createObjectURL(this.state.id_photo)}></Image> : <div></div>}
                </Form.Group>
                <Form.Group controlId="formBasicYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Year" 
                        value={this.state.year}
                        onChange={(e) => this.setYear(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicDept">
                    <Form.Label>Department</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Department(comp||It||ENTC||Mech||Instru)" 
                        value={this.state.dept}
                        onChange={(e) => this.setDept(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicRoll">
                    <Form.Label>Roll No</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="Roll No" 
                        value={this.state.roll_no}
                        onChange={(e) => this.setRoll(e.target.value)}
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
export default connect(null, mapDispatchToProps)(withRouter(CreateStudent));