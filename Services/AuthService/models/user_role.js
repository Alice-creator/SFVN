const { ObjectId } = require('bson')
const mongoose = require('mongoose')

const userroleSchema = mongoose.Schema({
    user_id: ObjectId,
    role_id: ObjectId,
})

module.exports = new mongoose.model('UserRole', userroleSchema)