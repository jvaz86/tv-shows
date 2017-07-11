import	React from 'react';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

class FavoritesBtn extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			color: "white"
		}
	}

	onClick(id){
		console.log('The tv show id is: '+id);
	}

	render(){
		return(
			<IconButton ><StarBorder onClick={this.onClick.bind(this,this.props.showid)} color="white" /></IconButton>
		);
	}
}

export default FavoritesBtn;