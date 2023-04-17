const getWatchListService = require('../services/getWatchListService');


const getWatchList = async function(req){
    return await getWatchListService.getWatchList(req);
}

module.exports = {
    getWatchList
};
    