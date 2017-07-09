'use strict' //This is for use new ECMAScript 6 variables type

const express = require('express')
const api = express.Router()
//const Favorites = require('../models/favorites')
const User = require('../models/users')


//--- Start GET request---------------------------
// api.get('/product',ProductModel.getProducts)
// api.get('/product/:id',ProductModel.getProduct)
//-----End GET request-----------------------------

//--- Start POST request---------------------------
api.post('/user/login',User.getUser)
//-----End POST request-----------------------------

//--- Start PUT request---------------------------
// api.put('/product/:id',ProductModel.updateProduct)
//-----End PUT request-----------------------------

//--- Start DELETE request---------------------------
// api.delete('/product/:id',ProductModel.deleteProduct)
//-----End DELETE request-----------------------------

module.exports = api