const mongoose = require('mongoose')

const uri = 'mongodb+srv://admin:admin@firstcluster.jwzfk.mongodb.net/SFVN_AuthService?retryWrites=true&w=majority&appName=FirstCluster'

const pool = {
    minPoolSize: 10,
    maxIdleTimeMS: 10000,
    connectTimeoutMS: 30000,
}

module.exports = async () => {
    try{
        await mongoose.connect(uri, pool)
        const pingResult = await mongoose.connection.db.command({ ping: 1 });
        console.log('Database ping result:', pingResult);
        console.log('connect database successfully')
    }catch(err){
        console.log(`There's an error: ${err}`)
    }
}