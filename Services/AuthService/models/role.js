const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    name_role: String
})

module.exports = mongoose.model('Role', roleSchema)