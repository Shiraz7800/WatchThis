const registrationService = require('../services/registrationService');


const registration = async function(req,res){
    const username = req.body.username;
    const plainPassword = req.body.password;
    try{
        registrationService.register(username,plainPassword)
        res.send()
    }catch(error){
        if(error.code === 11000){
            return res.send({status:'error',error:'username already exists'})
        }
        res.status(500)
        res.send()
    }
}

module.exports = {
    registration
};
    