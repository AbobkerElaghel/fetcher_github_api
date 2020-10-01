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

  // this function is a life cycle function that will run automatically when the page first loads
  // read more about them here
  // https://www.w3schools.com/react/react_lifecycle.asp#:~:text=Each%20component%20in%20React%20has,Mounting%2C%20Updating%2C%20and%20Unmounting.
  // https://reactjs.org/docs/state-and-lifecycle.html
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
        console.error(error);
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
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search} /> 
        {this.state.repos.map((repo, index) => <Repo key={index} createdAt={repo.createdAt} username={repo.userName} repoName={repo.repoName} url={repo.url}/>)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
