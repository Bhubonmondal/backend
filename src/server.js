//intilize express
const express = require('express')
const app = express()

const bodyParser = require('body-parser') //intilize body parser can read post request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const serverless = require('serverless-http')

//intilize mongoose
const mongoose = require('mongoose')
const note = require('./models/model')

const mongoDBpath = "mongodb+srv://bhubonmondal05:65422222@cluster0.xyjmrva.mongodb.net/notesdb";
mongoose.connect(mongoDBpath).then(
    () => {
        //routes
        app.get('/', async function (req, res) {
            const response = { message: "API Works" };
            res.json(response);
        })
        const noteRouter = require('./routes/route');
        app.use("/notes", noteRouter)

    }
)

// module.exports.handler = serverless(app);

const PORT = process.env.PORT || 5000;
//port no
app.listen(PORT, () => {
    console.log('server started at : '+PORT)
})