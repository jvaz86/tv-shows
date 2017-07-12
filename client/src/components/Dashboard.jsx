import React from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FavoritesBtn from '../containers/FavoritesBtn.jsx';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    overflowY: 'auto',
    fontSize: 8
  },
  bar: {
    backgroundColor: 'rgb(48, 48, 48)'
  },
  textBar: {
    color: 'white'
  }
};

const GridListTvShows = ({
  listdos,
  userName,
  logOut
}) => (
  <div style={styles.root}>
    <AppBar
      title="TV SHOWS"
      iconElementLeft={<div></div>}
      iconElementRight={<div><em>{userName}</em> <FlatButton onClick={logOut} label="Log out" /></div>}
      titleStyle={styles.textBar}
      style={styles.bar}
      iconStyleRight={styles.textBar}
    />
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {listdos.map((tile) => (
        <GridTile
          key={tile.id}
          title={tile.name + ' | ' + moment(tile.premiered).format('Y') + ' | ' + tile.genres.join(', ')}
          subtitle={<span><b>Summary: </b> {tile.summary.replace(/(<([^>]+)>)/ig,"")}</span>}
          style={styles.gridTile}
          actionIcon={<FavoritesBtn showid={tile.id} favorite={tile.favorite} />}>
          <img src={tile.image.medium} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListTvShows;
