'use strict' //This is for use new ECMAScript 6 variables type

const express = require('express');
const api = express.Router();
const User = require('../models/users');
const Favorites = require('../models/favorites');


//--- Start GET request---------------------------
api.get('/favorites/save/:userId/:showId',Favorites.addFavoriteTvShow);
api.get('/favorites/:userId',Favorites.getFavoriteTvShow);
//-----End GET request-----------------------------

//--- Start POST request---------------------------
api.post('/user/login',User.getUser);
//-----End POST request-----------------------------

//--- Start DELETE request---------------------------
api.post('/favorites/delete',Favorites.deleteFavoriteTvShow);
//-----End DELETE request-----------------------------

module.exports = api;