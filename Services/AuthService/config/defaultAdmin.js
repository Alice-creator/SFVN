const user = require('../models/user')
const userrole = require('../models/user_role')
const role = require('../models/role')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const defaultAdmin = async () => {
    let adminID = await role.find({
        name_role: 'admin'
    },{_id: 1}).exec()
    console.log(adminID)
    admin = await userrole.findOne(
        {
            role_id: adminID
        }
    ).exec()
    console.log(admin)
    if(!admin){
        await new user({
            user_name: 'admin',
            full_name: 'admin',
            password: await bcrypt.hash(process.env.ADMIN_PASSWORD, parseInt(process.env.SALTROUNDS)),
        }).save()
    }
    mongoose.disconnect()
}

module.exports = defaultAdmin