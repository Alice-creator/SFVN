const express = require('express')
const database = require('./config/database')
const defaultAdmin = require('./config/defaultAdmin')

const app = express()
database()
defaultAdmin()
module.exports = app
