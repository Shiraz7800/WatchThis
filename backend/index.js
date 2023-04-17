const app = require('express')();
const { json } = require('express');
const UserModel = require('./models/Users');
const bodyParser = require('body-parser')
const cors=require("cors");
const PORT = 8080


app.use(cors({ credentials: true, origin: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./routes/routes')(app)

app.listen(
    PORT,
    () => console.log("Alive on Port:", PORT)
)

app.post('/addList', async (req,res)=>{
    const user = req.body.username
    const movie = req.body.movie
    try {
        await UserModel.updateOne(
            { username: user },
            { $push: { watchList: {title: movie.title, poster_path:movie.poster.substring(31)}}}
        )
        res.send()
    } catch (error) {
        console.log(error)
        console.log(JSON.stringify(error));
        res.status(500).send()
    }
})

app.post('/removeList', async (req,res)=>{
    const user = req.body.username
    const movie = req.body.movie
    try {
        await UserModel.updateOne(
            { username: user },
            { $pull: { watchList: {title: movie.title, poster_path:movie.poster}}}
        )
        res.send()
    } catch (error) {
        console.log(JSON.stringify(error));
        res.status(500).send()
    }
})

