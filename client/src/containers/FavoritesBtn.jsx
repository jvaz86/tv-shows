import	React from 'react';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class FavoritesBtn extends React.Component {

	constructor(props){
		super(props);

		if (props.favorite) {
			this.state = {
				color: "rgb(255, 195, 0)"
			}
		}else{
			this.state = {
				color: "white"
			}
		}
	}

	onClick(showId){
		var userId = localStorage.getItem('userId');

		if (this.state.color == "white") {
			fetch(`/api/favorites/save/${userId}/${showId}`)
		    .then((response) => {
		      return response.json()
		    })
		    .then((data) => {
		      	if (data.saveFavorite) {
					this.setState({
						color: "rgb(255, 195, 0)"
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
						color: "white"
					});
		      	}
		    })
		}

	}

	render(){
		return(
			<IconButton ><StarBorder onClick={this.onClick.bind(this,this.props.showid)} color={this.state.color} /></IconButton>
		);
	}
}

export default FavoritesBtn;