const express = require('express');
const router = require('./routes/url');
const { connectToMongo } = require('./connect');
const URL = require('./models/url');
const path = require('path');
const staticRoute  = require("./routes/staticRouter")

const app = express();

connectToMongo("mongodb://127.0.0.1/short-url")
.then(() => {
    console.log('MongoDB Connected');
})
.catch(err => {
    console.error('MongoDB connection failed:', err);
});

app.set("view engine","ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());

app.use("/url", router);
app.use("/",staticRoute);


app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId }, 
        { $push: { visitHistory: { timestamp: Date.now() } } },
        { new: true } // This option returns the updated document
    );

    if (!entry) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    res.redirect(entry.reDirectURL);
});

app.listen(8001, () => {
    console.log("Server started on port 8001");
});
