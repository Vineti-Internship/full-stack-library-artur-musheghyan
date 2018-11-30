import React, {Component} from 'react';
import './App.css';
import {AuthorsTable} from "./components/authorsTable";
import {showAddAuthorPopup} from "./components/popups/popupAddAuthors";
import {AllBookComponent} from "./components/allBooksComponent";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Library</h1>
        </header>
        <main>
          <AllBookComponent/>

          <h2>All Authors</h2>
          <button onClick={addAuthorClickHandler}>add Author</button>
          <AuthorsTable/>
        </main>
        <div id='popupContainer'/>
      </div>
    );
  }
}

const addAuthorClickHandler = () => {
  showAddAuthorPopup();
};

export default App;
