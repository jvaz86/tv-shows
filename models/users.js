'use strict' //This is for use new ECMAScript 6 variables type

const connect = require('../conf/connection');
const bcrypt = require('bcrypt-nodejs');

function getUser(req,res){
	var query = `SELECT * FROM tv_shows.users WHERE email='${req.body.email}'`;

	connect.cn.query(query,(err, user) => {
		if (user.length == 0) {
			res.status(200).send({
				login: false,
				message: 'Email is wrong'
			});
		}else{
			bcrypt.compare(req.body.password, user[0].pass, function(err, isMatch) {
			    if (!isMatch) {
			    	res.status(200).send({
						login: isMatch,
						message: 'Password is wrong'
					});
					res.end();
			    }else{
				    res.status(200).send({
						login: isMatch,
						user: {'id': user[0].id, 'name': user[0].name, 'email': user[0].email}
					});
			    }
			});
		}
	})
}

module.exports = {
	getUser
}