'use strict' //This is for use new ECMAScript 6 variables type

import React from 'react';
import Dashboard from '../components/Dashboard.jsx';
import PropTypes from 'prop-types';

class DashboardPage extends React.Component {


	constructor(props,context) {
    	super(props,context);

	    this.state = {
			listTvShows: [],
			favorites: [],
			userName: ''
	    };

	    this.logOut = this.logOut.bind(this);
	}

	componentWillMount() {

		const userId = localStorage.getItem('userId');
		const userName = localStorage.getItem('userName');

		fetch(`/api/favorites/${userId}`)
		.then((response) => {
			return response.json()
		})
		.then((favorites) => {
			this.setState({ 
				favorites: favorites,
				userName: userName
			})
			this.getFavorites();
		})
	}

	getFavorites(favorites){
		fetch('http://api.tvmaze.com/shows')
		.then((response) => {
			return response.json()
		})
		.then((shows) => {

			const f = this.state.favorites.favorites;
			shows.map(function(elem,index) {
				var saveFavorite = false;
				f.map(function(elem2, index2) {
					if (elem2.favorite_id == elem.id) {
						saveFavorite = true;
						shows[index].favorite = true;
					}else if (!saveFavorite){
						shows[index].favorite = false;
					}
				})
			});
		
			this.setState({ listTvShows: shows });
		})
	}

	logOut(event){
    	event.preventDefault();

		localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        
        this.context.router.replace('/');
	}
	
  	render() {
	    return (
	      <Dashboard
	        listdos={this.state.listTvShows}
	        userName={this.state.userName}
	        logOut={this.logOut}
	      />
	    );
  	}

}

DashboardPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default DashboardPage;