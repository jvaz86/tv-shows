'use strict' //This is for use new ECMAScript 6 variables type

const connect = require('../conf/connection');

function addFavoriteTvShow(req,res){
	var query = `INSERT INTO tv_shows.favorites (user_id, favorite_id) VALUES (${req.params.userId},${req.params.showId})`;
	connect.cn.query(query,(err, favorites) => {
		if (err) {
			res.status(200).send({
				saveFavorite: false
			});
		}

		res.status(200).send({
			saveFavorite: true
		});
	})
}

function deleteFavoriteTvShow(req,res){
	var query = `DELETE FROM tv_shows.favorites WHERE user_id=${req.body.userId} AND favorite_id=${req.body.showId}`;
	connect.cn.query(query,(err, favorites) => {
		if (err) {
			res.status(200).send({
				deleteFavorite: false
			});
		}

		res.status(200).send({
			deleteFavorite: true
		});
	})
}

function getFavoriteTvShow(req,res){
	var query = `SELECT favorite_id FROM tv_shows.favorites WHERE user_id=${req.params.userId}`;
	connect.cn.query(query,(err, favorites) => {
		if (err) {
			res.status(200).send({
				error: err
			});
		}

		res.status(200).send({
			favorites: favorites
		});
	})
}


module.exports = {
	addFavoriteTvShow,
	deleteFavoriteTvShow,
	getFavoriteTvShow
}