import React, {Component} from 'react';
import './App.css';
import {LoadingBar} from "./components/loadingBar";
import {dataLoader} from "./utils/api";

class App extends Component {
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    // this.setState(loaderstate)
    console.log("kkkk ", dataLoader('authors','GET'));
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Library</h1>
        </header>
        <main>
          <LoadingBar/>
        </main>
      </div>
    );
  }
}

export default App;
