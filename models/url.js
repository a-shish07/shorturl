const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,
    },
    reDirectURL:{
        type: String,
        required: true,
    },
    visitHistory: [ { timeStamp: { type: Number }}],
    
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        },
    }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;