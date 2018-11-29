import React, {Component} from 'react';
import './App.css';
import {BooksTable} from "./components/booksTable";
import {AuthorsTable} from "./components/authorsTable";
import {SearchTable} from "./components/searchTable";
import {showAddAuthorPopup} from "./components/popups/popupAddAuthors";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Library</h1>
        </header>
        <main>
          <h2>All Books</h2>
          <BooksTable/>
          <h2>All Authors</h2>
          <button onClick={addAuthorClickHandler}>add Author</button>
          <AuthorsTable/>
          <h2>Search</h2>
          <SearchTable/>
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
