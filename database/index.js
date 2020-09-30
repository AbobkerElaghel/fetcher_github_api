const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/chat");

mongoose.connect(process.env.MONGO_URL);

let repoSchema = mongoose.Schema({});

let Repo = mongoose.model("Repo", repoSchema);

let saveRepos = (/* TODO */) => {};

module.exports.save = save;
