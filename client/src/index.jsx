import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";
import Repo from "./components/Repo.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
    this.search = this.search.bind(this);
  }

  // this function is a life cycle function that well run automatocly when the page first loads 

  componentDidMount(){
    // becouse we want to load the lestest repos from the database when our app first loads 
    const options = {
      method: 'get',
      url: '/repos'
    };
    axios(options)
      .then(reposData => {
        this.setState(() => ({
          repos: reposData.data
        }));
      })
      .catch(error => {
        console.log(error);
      })
  }

   search(term) {
    console.log(`${term} was searched`);
    // TODO
    const options = {
      method: 'post',
      url: '/repos',
      data: {username: term}
    };

    axios(options)
      .then(reposData => {
        this.setState(() => ({
          repos: reposData.data
        }));
      })
      .catch(error => {
        console.log(error);
      })
  }


    //userName
    //repoName
    //url
    //createdAt

  // we should pass a repos object tp the Repo Component 
  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search} /> 
        {this.state.repos.map((repo, i) => <Repo key={i} createdAt={repo.createdAt} username={repo.userName} repoName={repo.repoName} url={repo.url}/>)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
