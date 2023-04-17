const UserModel = require('../models/Users');
const bcrypt = require('bcryptjs')
const saltRounds = 10;
const dbConnection = require('../repository/dbConnection')


const register = async(username, plainPassword) => {
    dbConnection.connect()

    const alreadyExists = await UserModel.findOne({username}).lean()
    if(alreadyExists != null){
        console.log("testing null")
        return res.send({status:'error',error:'username already exists'})
    }
    
    const encyptedPassword = await bcrypt.hash(plainPassword, saltRounds);
    try {
        await UserModel.create({
            username,
            password: encyptedPassword,
            watchList:[],
            favouriteList:[]
        })
        return;
    } catch (error) {
        console.log(JSON.stringify(error));
        throw error
    }
}

module.exports = {
    register
};