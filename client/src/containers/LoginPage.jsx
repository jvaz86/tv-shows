'use strict' //This is for use new ECMAScript 6 variables type

import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';


class LoginPage extends React.Component {

  constructor(props,context) {
    super(props,context);

    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();

    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
      if (xhr.response.success) {
        this.setState({
          errors: {}
        });

        this.validUser(xhr.response.data);

      } else {
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  validUser(data) {

    const email = data.email;
    const password = data.password;
    const formData = `email=${email}&password=${password}`;

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/user/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      console.log('llegando user validate');
      console.log(xhr.response);
      if (xhr.response.login) {
        this.setState({
          errors: {}
        });
        
        console.log('login correct');
        this.context.router.replace('/dashboard');
        
      } else {
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);

  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};


export default LoginPage;
