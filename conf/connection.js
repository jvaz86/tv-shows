'use strict' //This is for use new ECMAScript 6 variables type

const mysql = require('mysql')

const cn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'node_shop'
})

cn.connect((err) => {
	if (!err) {
		console.log('Database is connected...')
	}else{
		console.log(err)
	}
})

module.exports = {cn}