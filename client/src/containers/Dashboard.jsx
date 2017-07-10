'use strict' //This is for use new ECMAScript 6 variables type

import React from 'react';
import Dashboard from '../components/Dashboard.jsx';
import PropTypes from 'prop-types';

class DashboardPage extends React.Component {


	constructor(props) {
	    super(props);

	    this.state = {
	      listTvShows: []
	    };

	    const xhr = new XMLHttpRequest();
	    xhr.open('get', 'http://api.tvmaze.com/shows');
	    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    xhr.responseType = 'json';
	    xhr.addEventListener('load', () => {
	    	console.log(xhr.response);
	        this.setState({
	          listTvShows: xhr.response
	        });
	    });

	    xhr.send();
	}
	
  	render() {
	    return (
	      <Dashboard
	        listdos={this.state.listTvShows}
	      />
	    );
  	}

}

export default DashboardPage;