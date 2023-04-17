const { mongoose } = require('mongoose');
const UserModel = require('../models/Users');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "hi"
const dbConnection = require('../repository/dbConnection')


const verifyUserLogin = async (username,password)=>{
    dbConnection.connect()
    try {
        const user = await UserModel.findOne({username}).lean()
        if(!user){
            return {status:401,error:'user not found'}
        }
        if(await bcrypt.compare(password,user.password)){
            token = jwt.sign({id:user._id,username:user.username,type:'user'},JWT_SECRET,{ expiresIn: '2h'})
            return {status:200, data:token}
        }
        return {status: 401, error:'invalid password'}
    } catch (error) {
        console.log(error);
        return {status:'error',error:'timed out'}
    }
}

module.exports = {
    verifyUserLogin
};