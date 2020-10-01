const {saveRepos ,fetchReposByUsername, fetchRepos} = require('../../database/index');
const getReposFromGithubApi = require('../../helpers/github');
const cleanGithubRepos = require('../../helpers/cleanGithubRepos');

exports.addRepos = (req, res) => {
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
  };

  exports.getLatestRepos = (req, res) => {
    fetchRepos()
      .then(repos => {
        return res.status(200).json(repos);
      })
      .catch(() => {
        return res.status(500).json(data);
      });
  }