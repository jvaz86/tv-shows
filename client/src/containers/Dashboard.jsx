'use strict' //This is for use new ECMAScript 6 variables type

import React from 'react';
import Dashboard from '../components/Dashboard.jsx';
import PropTypes from 'prop-types';

class DashboardPage extends React.Component {


	constructor(props) {
	    super(props);

	    this.state = {
	      listTvShows: [],
	      favorites: []
	    };
	}

	componentWillMount() {

		const userId = localStorage.getItem('userId');

		fetch(`/api/favorites/${userId}`)
		.then((response) => {
			return response.json()
		})
		.then((favorites) => {
			this.setState({ favorites: favorites })
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
	
  	render() {
	    return (
	      <Dashboard
	        listdos={this.state.listTvShows}
	      />
	    );
  	}

}

export default DashboardPage;