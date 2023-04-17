const movideDataController = require('../controllers/movieDataController')
const loginController = require('../controllers/loginController')
const registrationController = require('../controllers/registrationController')
const getWatchListController = require('../controllers/getWatchListController')
const addListController = require('../controllers/addListController')
const dbConnection = require('../repository/dbConnection')


module.exports = function(app)
{
    app.get('/streamingProviders' , async (req, res) => {
        movieData = await movideDataController.getMovieData(req)
        res.status(200).send(
            movieData
        )
    });

    app.post('/login' , async (req, res) => {
        verifyLogin = await loginController.login(req, res)
    });

    app.post('/signUp', async (req,res)=>{
        console.log("running")
        registrationController.registration(req, res)
    });

    app.get('/getWatchList', async (req,res)=>{
        console.log(req.body)
        watchList = await getWatchListController.getWatchList(req)
        res.status(200).send(
            watchList
        )
    });

    app.post('/addWatchList', async (req,res)=>{
        addList = await addListController.addList(req)
        if(addList){
            res.status(200).send()
        }
        res.status(500).send()
    });


}
