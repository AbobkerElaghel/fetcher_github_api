const express = require("express");
const app = express();
const {addRepos, getLatestRepos} = require('./controllers/repoControllers');
app.use(express.static(__dirname + "/../client/dist")); 
app.use(express.json());

app.post("/repos", addRepos);
app.get("/repos", getLatestRepos);

let port = 1900;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
