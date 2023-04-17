const axios = require('axios');
const posterPath = "http://image.tmdb.org/t/p/w500"

async function getStreamingProviders(ID){
    return await axios.get(`https://api.themoviedb.org/3/movie/${ID}/watch/providers?api_key=c60655d05800b5f4dde3ee606c3be093`
    )   
    .then(response => {
        let services = []
        buy  = (response.data.results["GB"]["buy"])
        sub = (response.data.results["GB"]["flatrate"])

        if (buy != undefined){
            for (let i = 0; i < buy.length; i++) {
                services.push(posterPath + buy[i]["logo_path"])
            }
        }
        if (sub != undefined){
            for (let i = 0; i < sub.length; i++) {
                services.push(posterPath + sub[i]["logo_path"])
            }
        }
        return services
    })
    .catch(error => {
        console.log(error);
    });
};

module.exports = {
    getStreamingProviders
};

