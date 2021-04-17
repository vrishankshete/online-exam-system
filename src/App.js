import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import AdminLogin from './components/Login/AdminLogin';
import StudentLogin from './components/Login/StudentLogin';
import TeacherLogin from './components/Login/TeacherLogin';
import Dashboard from './components/Teacher/Dashboard';
import ErrorPage from './components/ErrorPage';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path="/teacher/addtest" component={Dashboard} exact={true}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={AdminLogin}/>
          <Route path="/teacher" component={TeacherLogin}/>
          <Route path="/student" component={StudentLogin}/>
          <Route component={ErrorPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
