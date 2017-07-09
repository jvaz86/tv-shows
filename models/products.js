'use strict' //This is for use new ECMAScript 6 variables type

const connect = require('../conf/connection')

function getProducts(req,res) {
	console.log('GET /api/product list')

	let query = `SELECT * FROM products`
	connect.cn.query(query,(err,result) => {
		if(err){
			res.status(500).send({
				message: err
			})
		}else{
			res.status(200).send({
				products: result
			})
		}
	})
}

function getProduct(req,res) {
	console.log(`GET /api/product ${req.params.id}`)

	let query = `SELECT * FROM products WHERE id=${req.params.id}`
	connect.cn.query(query,(err,result) => {
		//cn.end()
		if(err){
			res.status(500).send({
				message: err
			})
		}else{
			res.status(200).send({
				products: result
			})
		}
	})

}

function addProduct(req,res) {
	console.log('POST /api/product')
	console.log(req.body)

	// res.status(200).send({ message: 'Product got' })
	let description = ''
	if (req.body.description) {
		description = req.body.description
	}

	let query = `INSERT INTO products (name,price,quantity,description) 
						VALUES ('${req.body.name}',
								 ${req.body.price},
								 ${req.body.quantity},
								'${description}')`
	connect.cn.query(query,(err) => {
		//cn.end()
		if(err){
			res.status(500).send({
				message: err
			})
		}else{
			res.status(200).send({
				message: 'Data added successfully'
			})
		}
	})
}

function updateProduct(req,res) {
	console.log(`UPDATE /api/product ${req.params.id}`)
	console.log(req.body)

	let query = ``
	if (req.body.name) { 
		query = `UPDATE products SET name='${req.body.name}' `
	}

	if (req.body.price && query != ``) { 
		query += `,price=${req.body.price} `
	}else if (req.body.price) {
		query = `UPDATE products SET price=${req.body.price} `
	}

	if (req.body.quantity && query != ``) { 
		query += `,quantity=${req.body.quantity} `
	}else if (req.body.quantity) {
		query = `UPDATE products SET quantity=${req.body.quantity} `
	}

	if (req.body.description && query != ``) { 
		query += `,description='${req.body.description}' `
	}else if (req.body.description) {
		query = `UPDATE products SET description='${req.body.description}' `
	}

	query += `WHERE id=${req.params.id}`

	console.log(query)

	connect.cn.query(query,(err,result) => {
		//cn.end()
		if(err){
			res.status(500).send({
				message: err
			})
		}else{
			res.status(200).send({
				message: `Product ${req.params.id} updated successfully`
			})
		}
	})
}

function deleteProduct(req,res) {
	console.log(`DELETE /api/product ${req.params.id}`)

	let query = `DELETE FROM products WHERE id=${req.params.id}`
	connect.cn.query(query,(err,result) => {
		//cn.end()
		if(err){
			res.status(500).send({
				message: err
			})
		}else{
			res.status(200).send({
				message: `Product ${req.params.id} deleted successfully`
			})
		}
	})
}

module.exports = {
	getProducts,
	getProduct,
	addProduct,
	updateProduct,
	deleteProduct
}