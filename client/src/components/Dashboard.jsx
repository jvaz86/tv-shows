import React from 'react';
import PropTypes from 'prop-types';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    overflowY: 'auto',
  },
};

const GridListTvShows = ({listdos}) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {listdos.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.name}
          subtitle={<span>by <b>{tile.premiered}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
          <img src={tile.image.medium} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListTvShows;
