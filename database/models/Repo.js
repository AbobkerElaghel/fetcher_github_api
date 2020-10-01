const mongoose = require("mongoose");
let repoSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    repoName: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    }
});

module.exports = mongoose.model("Repo", repoSchema);