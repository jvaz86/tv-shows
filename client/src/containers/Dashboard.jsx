'use strict' //This is for use new ECMAScript 6 variables type

import React from 'react';
import Dashboard from '../components/Dashboard.jsx';
import PropTypes from 'prop-types';

class DashboardPage extends React.Component {

	constructor(props) {
	    super(props);

	    this.setState = {
	      listTvShows: []
	    };
	}

	getListTvShows(event) {
	    event.preventDefault();

	    const xhr = new XMLHttpRequest();
	    xhr.open('get', 'http://api.tvmaze.com/schedule/full');
	    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    xhr.responseType = 'json';
	    xhr.addEventListener('load', () => {
	        this.setState({
	          listTvShows: xhr.response
	        });
	    });

	    xhr.send();
  	}

  	render() {
	    return (
	      <Dashboard
	        listTvShows={this.state.listTvShows}
	      />
	    );
  	}

}

export default DashboardPage;