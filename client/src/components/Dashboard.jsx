import React from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FavoritesBtn from '../containers/FavoritesBtn.jsx';
import moment from 'moment';

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
  }
};

const GridListTvShows = ({
  listdos
}) => (
  <div style={styles.root}>
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
          actionIcon={<FavoritesBtn showid={tile.id} />}>
          <img src={tile.image.medium} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListTvShows;
