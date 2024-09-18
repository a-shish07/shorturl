const shortid = require("shortid");
const URL = require('../models/url');

async function GenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({
            error: 'URL is required'
        });
    }

    const ShortId = shortid.generate(); // Correct usage of shortid
    await URL.create({
        shortId: ShortId,
        reDirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    return res.render("home", {
        id: ShortId,
    })
   
}

module.exports = {
    GenerateNewShortUrl,
}
