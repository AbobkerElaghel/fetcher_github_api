const axios = require("axios");
const config = require("../config.js");

let getReposByUsername = (/* TODO */) => {
  let options = {
    url: "FILL ME IN",
    headers: {
      "User-Agent": "request",
      Authorization: `token ${config.TOKEN}`,
    },
  };
};

module.exports.getReposByUsername = getReposByUsername;
