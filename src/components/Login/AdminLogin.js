import React from 'react';
import LoginHelper from './LoginHelper';

export default class AdminLogin extends React.Component {
    
    render() {
        return (
            <LoginHelper validateURL={'https://reqres.in/api/articles'} 
                successRedirect={'/admin/dashboard'}/>
        );
    }
}