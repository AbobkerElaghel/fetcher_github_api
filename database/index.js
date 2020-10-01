const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/chat");
mongoose.connect(process.env.MONGO_URL);

const Repo = require("./models/Repo");



const saveRepos = arrayOfObjectRepos => {
    // we want to insert a whole array
    // not just one object 
    return Repo.insertMany(arrayOfObjectRepos);
};



// the username that we should search our database with
const fetchReposByUsername = (username) => {
    return fetchRepos({username});
    //return should be a Promise, that have all the repos with the spicified username
};

const fetchRepos = (options = {}, limit = 25) => {
    return Repo.find(options)
    .sort({ createdAt: -1 })
    .limit(limit);
}


module.exports.saveRepos = saveRepos;
module.exports.fetchReposByUsername = fetchReposByUsername;
module.exports.fetchRepos = fetchRepos;

