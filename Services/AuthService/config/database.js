const mongoose = require('mongoose')

const uri = 'mongodb+srv://firstcluster.jwzfk.mongodb.net/SFVN_UserService'

const pool = {
    minPoolSize: 10,
    maxIdleTimeMS: 10000,
    connectTimeoutMS: 30000,
}

module.exports = async () => {
    try{
        await mongoose.connect(uri, pool)
        console.log('connect database successfully')
    }catch(err){
        console.log(`There's an error: ${err}`)
    }
}