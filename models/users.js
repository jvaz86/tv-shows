'use strict' //This is for use new ECMAScript 6 variables type

const connect = require('../conf/connection')
//const bcrypt = require('bcrypt-nodejs')

function getUser(req,res){
	console.log('getting an user...')

	if(
		req.body.pass != "" && req.body.pass &&
	    req.body.email != "" && req.body.email
	    ){

		bcrypt.genSalt(10,(err,salt) => {
			console.log(salt)
			if (err) {
				res.status(500).send({
					err: 'Encryption error with the salt'
				})
			}else{
				bcrypt.hash(req.body.pass, salt, null, (err,hash) => {
					if (err) {
						res.status(500).send({
							err: 'Encryption error with the hash'
						})
					}else{
						req.body.pass = hash

						let query = `SELECT * FROM users 
											WHERE email='${req.body.email}' and 
												  pas='${hash}'`
						connect.cn.query(query,(err, user) => {
							//cn.end()
							if(err){
								res.status(500).send({
									err: err
								})
							}else{
								res.status(200).send({
									user: user
								})
							}
						})
					}
				})
			}
		})
	}else{
		res.status(500).send({
			err: "The data is not completed"
		})
	}
}

module.exports = {
	getUser
}