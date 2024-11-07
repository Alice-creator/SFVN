const express = require('express')
const database = require('./config/database')

const app = express()
database()

module.exports = app
