import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import FavoritesBtn from '../containers/FavoritesBtn.jsx';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import moment from 'moment';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    margin: '0 auto',
    fontSize: 12
  },
  bar: {
    backgroundColor: 'rgb(48, 48, 48)'
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  card: {
  	width: '100%'
  },
  img: {
  	height: '100%',
    transform: 'translateX(-50%)',
    position: 'relative',
    left: '50%'
  }
};

const GridListTvShows = ({
  listdos,
  userName,
  logOut
}) => (

  <div style={styles.root}>
    <AppBar position="static">
        <Toolbar>
			<Typography type="title" color="inherit" style={styles.flex}>
				TV SHOWS
			</Typography>
			<Typography type="title" color="inherit" style={styles.flex} align="center">
				{userName}
			</Typography>
			<Button onClick={logOut} color="contrast">Log Out</Button>
        </Toolbar>
     </AppBar>

	<br />
	<br />
    <Grid container style={styles.gridList}>
        {listdos.map((tile) => (
			<Grid
				key={tile.id}
				title={tile.name + ' | ' + moment(tile.premiered).format('Y') + ' | ' + tile.genres.join(', ')}
				item xs={6}
			>

				<Card style={styles.card}>
			        <CardMedia>
			          	<img style={styles.img} src={tile.image.medium} />
			        </CardMedia>
			        <CardContent>
						<Typography type="headline" component="h2">
							{tile.name + ' | ' + moment(tile.premiered).format('Y') + ' | ' + tile.genres.join(', ')}
						</Typography>
						<Typography component="p">
							{tile.summary.replace(/(<([^>]+)>)/ig,"")}
						</Typography>
			        </CardContent>
			        <CardActions>
		          		<FavoritesBtn showid={tile.id} favorite={tile.favorite} />
			        </CardActions>
			    </Card>

			</Grid>
		))}
    </Grid>

  </div>
);

export default GridListTvShows;
