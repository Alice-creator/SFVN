const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_name: String,
    full_name: String,
    phone_number: String,
    email: String,
    identity_number: String,
    password: String,
    point: Number
})

module.exports = mongoose.model('User', userSchema)