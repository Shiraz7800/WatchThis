const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    watchList:[{
        title: String, 
        poster_path: String
    }],
    favouriteList: [[String]]
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;