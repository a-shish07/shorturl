const express = require('express');
const router = require('./routes/url');
const { connectToMongo } = require('./connect');
const URL = require('./models/url');


const app = express();

connectToMongo("mongodb://127.0.0.1/short-url")
.then(() =>{
    console.log('MongoDb Connected')
})

app.use(express.json());

app.use("/url", router)

app.get('/:ShortId', async(req, res) => {
    const ShortId = req.params.ShortId;
    const entry = await URL.findOneAndUpdate({
        ShortId
    }, { $push: {
        visitHistory : {
          timestamp: Date.now(),  
        },
    }})
    res.redirect('https://' + entry.redirect);
})

app.listen(8001, () =>{
    console.log("Server started");
})