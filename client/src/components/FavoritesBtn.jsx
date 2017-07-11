import React from 'react';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const FavoritesBtn = ({
	showid,
	onClick
}) => {
	<IconButton ><StarBorder onClick={onClick.bind(this,showid)} color="white" /></IconButton>
};

export default FavoritesBtn;