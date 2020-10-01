const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/chat");

const Repo = require("./models/Repo");

const saveRepos = arrayOfObjectRepos => {
    return Repo.insertMany(arrayOfObjectRepos);
};

const fetchReposByUsername = username => fetchRepos({username});

const fetchRepos = (options = {}, limit = 25) => {
    return Repo.find(options)
    .sort({ createdAt: -1 })
    .limit(limit);
}


module.exports.saveRepos = saveRepos;
module.exports.fetchReposByUsername = fetchReposByUsername;
module.exports.fetchRepos = fetchRepos;

