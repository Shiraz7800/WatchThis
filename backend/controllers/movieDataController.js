const movieDataService = require('../services/movieDataService');
const streamingProviderService = require('../services/streamingProviderService');
const posterPath = "http://image.tmdb.org/t/p/w500"


const getMovieData = async function(req){    
    const movieData = await movieDataService.getMovieData(req.query.name)
    const ID = movieData["id"]
    const title = movieData["title"]
    const poster = posterPath + movieData["poster_path"]
    const streamers = await streamingProviderService.getStreamingProviders(ID)
    return {poster,streamers,title}
}

module.exports = {
    getMovieData
};

