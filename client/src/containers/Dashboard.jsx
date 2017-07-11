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
	}

	componentWillMount() {
		fetch('http://api.tvmaze.com/shows')
		.then((response) => {
			return response.json()
		})
		.then((shows) => {
			this.setState({ listTvShows: shows })
		})
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