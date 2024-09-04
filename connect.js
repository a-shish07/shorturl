const { mongoose } = require('mongoose');

// const mongoose = require('mongoose');


async function connectToMongo(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectToMongo,
}
//new immport