'use strict' //This is for use new ECMAScript 6 variables type

const express = require('express') //Import express framework for nodejs
const bodyParser = require('body-parser') //Import body-parser like middleware for http requests
const api = require('./router')
const app = express()

// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
const authRoutes = require('./server/routes/auth');
app.use('/auth', authRoutes);

app.use('/api',api)

module.exports = app