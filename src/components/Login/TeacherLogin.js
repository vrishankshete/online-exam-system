import React from 'react';
import LoginHelper from './LoginHelper';


export default class TeacherLogin extends React.Component {
    render() {
        return (
            <LoginHelper validateURL={'https://reqres.in/api/articles'} 
                successRedirect={'/teacher/addtest'}/>
        );
    }
}