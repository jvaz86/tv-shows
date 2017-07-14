import React from 'react';
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui-icons/Star';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';

class FavoritesBtn extends React.Component {

	constructor(props){
		super(props);

		if (props.favorite) {
			this.state = {
				color: '#3f51b5'
			}
		}else{
			this.state = {
				color: 'rgba(0, 0, 0, 0.54)'
			}
		}
	}

	onClick(showId){
		var userId = localStorage.getItem('userId');

		if (this.state.color == 'rgba(0, 0, 0, 0.54)') {
			fetch(`/api/favorites/save/${userId}/${showId}`)
		    .then((response) => {
		      return response.json()
		    })
		    .then((data) => {
		      	if (data.saveFavorite) {
					this.setState({
						color: '#3f51b5'
					});
		      	}
		    })
		}else{
		    const data = `userId=${userId}&showId=${showId}`;

			fetch(`/api/favorites/delete`, {
		        method: 'POST',
		        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		        body: data
		    })
		    .then((response) => {
		      return response.json()
		    })
		    .then((data) => {
		      	if (data.deleteFavorite) {
					this.setState({
						color: 'rgba(0, 0, 0, 0.54)'
					});
		      	}
		    })
		}

	}

	render(){
		return(
			<IconButton ><StarIcon onClick={this.onClick.bind(this,this.props.showid)} color={this.state.color} /></IconButton>
		);
	}
}

export default FavoritesBtn;