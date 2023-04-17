const addListService = require('../services/addListService');

const addList = async function(req){
    return await addListService.addList(req);
}

module.exports = {
    addList
};
    