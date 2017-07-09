'use strict' //This is for use new ECMAScript 6 variables type

const express = require('express') //Import express framework for nodejs
const bodyParser = require('body-parser') //Import body-parser like middleware for http requests
const api = require('./router')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api',api)

module.exports = app