const loginService = require('../services/loginService');


const login = async function(req,res){
    const username = req.body.username
    const password = req.body.password
    const response = await loginService.verifyUserLogin(username,password);
    if(response.status===200){
        res.cookie('token',token,{ maxAge: 2 * 60 * 60 * 1000, httpOnly: true });  // maxAge: 2 hours
        res.send()
    }else{
        res.status(response.status)
        res.json(response);
    }
}

module.exports = {
    login
};
    