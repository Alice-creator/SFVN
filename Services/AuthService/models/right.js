const { ObjectId } = require('bson')
const mongoose = require('mongoose')
const { collection } = require('./user')

const rigtSchema = new mongoose.Schema({
    role_id: ObjectId,
    collection_name: ObjectId,
    right: String,
})

module.exports = new mongoose.model('Right', rigtSchema)