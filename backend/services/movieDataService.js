const axios = require('axios');

async function getMovieData(name){
    return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c60655d05800b5f4dde3ee606c3be093&language=en-US&query=${name}&page=1&include_adult=false`
    )
    .then(response => {
        return response.data.results[0]
    })
    .catch(error => {
        console.log(error);
    });
};

module.exports = {
    getMovieData
};


