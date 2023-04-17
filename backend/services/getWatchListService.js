const UserModel = require('../models/Users');
const dbConnection = require('../repository/dbConnection')


const getWatchList = async function(req){
    dbConnection.connect()
    const userName = req.body.username
    console.log(req.body)
    try {
        const user = await UserModel.findOne({userName}).lean()
        if(!user){
            return {status:401,error:'user not found'}
        }
        return user.watchList
    } catch (error) {
        console.log(error);
        return {status:'error',error:'timed out'}
    }
}

module.exports = {
    getWatchList
};
    