const express = require("express");
const app = express();
const getReposFromGithubApi = require('../helpers/github');
const cleanGithubRepos = require('../helpers/cleanGithubRepos');
const {saveRepos ,fetchReposByUsername, fetchRepos} = require('../database/index');

app.use(express.static(__dirname + "/../client/dist")); 
app.use(express.json());

app.post("/repos", (req, res) => {
  const { username } = req.body;
  fetchReposByUsername(username)
    .then(repos => {
      if(repos && repos.length){
        throw repos;
      }
        return getReposFromGithubApi(username);
    })
    .then(response => {
      const repos = cleanGithubRepos(response.data);
      return saveRepos(repos);
    })
    .then(repos => {  
      throw repos;
    })
    .catch(errORData => {
      if(Array.isArray(errORData)){
        return res.status(200).json(errORData);
      }else {
        return res.status(500).json(errORData);
      }
    });
});
app.get("/repos", (req, res) => {
  // you could change to any number that you want
  fetchRepos()
    .then(repos => {
      return res.status(200).json(repos);
    })
    .catch(() => {
      return res.status(500).json(data);
    });
});

let port = 1900;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
