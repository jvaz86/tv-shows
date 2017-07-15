import	React from 'react';
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui-icons/Star';
import IconFavorite from 'material-ui-icons/Favorite';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';

class FavoritesBtn extends React.Component {

	constructor(props){
		super(props);

		if (props.favorite) {
			this.state = {
				color: 0
			}
		}else{
			this.state = {
				color: 1
			}
		}
	}

	onClick(showId){
		var userId = localStorage.getItem('userId');

		if (this.state.color == 1) {
			fetch(`/api/favorites/save/${userId}/${showId}`)
		    .then((response) => {
		      return response.json()
		    })
		    .then((data) => {
		      	if (data.saveFavorite) {
					this.setState({
						color: 0
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
						color: 1
					});
		      	}
		    })
		}

	}

	render(){
		return(
			<BottomNavigation index={this.state.color} onChange={this.onClick.bind(this,this.props.showid)}>
	          <BottomNavigationButton icon={<IconFavorite />} />
	        </BottomNavigation>
		);
	}
}

export default FavoritesBtn;