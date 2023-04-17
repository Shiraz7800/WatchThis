const dbConnection = require('../repository/dbConnection')
const UserModel = require('../models/Users');

const addList = async function(req){
    dbConnection.connect()
    const user = req.body.username
    const movie = req.body.movie

    try {
        await UserModel.updateOne(
            { username: user },
            { $push: { watchList: {title: movie.title, poster_path:movie.poster.substring(31)}}}
        )
        return true
    } catch (error) {
        console.log(error)
        console.log(JSON.stringify(error));
        return false
    }
    
}

module.exports = {
    addList
};