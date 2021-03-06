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
    this.validUser = this.validUser.bind(this);
  }

  processForm(event) {
    event.preventDefault();

    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    fetch(`/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
    })
    .then((response) => {
      return response.json()
    })
    .then((login) => {
      if (login.success) {
        this.setState({
          errors: {}
        });

        var f = this.validUser(login.data);

        f.then((login) => {
          if (login.login) {
            this.setState({
              errors: {}
            });

            localStorage.setItem('userId', login.user.id);
            localStorage.setItem('userName', login.user.name);
            localStorage.setItem('userEmail', login.user.email);
            this.context.router.replace('/');

          } else {
            const errors = login.errors ? login.errors : {};
            errors.summary = login.message;

            this.setState({
              errors
            });
          }
        })

      } else {
        const errors = login.errors ? login.errors : {};
        errors.summary = login.message;

        this.setState({
          errors
        });
      }
    })
  }

  validUser(data) {

    const email = data.email;
    const password = data.password;
    const formData = `email=${email}&password=${password}`;

    var f = fetch(`/api/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
    })
    .then((response) => {
      return response.json()
    })

    return f;
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
      <div>
        <br/>
        <br/>
        <br/>
        <LoginForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    );
  }

}

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};


export default LoginPage;
