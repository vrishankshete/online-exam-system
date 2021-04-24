import React from 'react';
import LoginHelper from './LoginHelper';


export default class StudentLogin extends React.Component {
    
    render() {
        return (
            <LoginHelper validateURL={'https://reqres.in/api/articles'} 
                successRedirect={'/student/dashboard'}/>
        );
    }
}