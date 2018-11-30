import React from 'react';
import {BooksTable} from "./booksTable";
import {getSearchResult} from "../utils/searcheController";

export class AllBookComponent extends React.Component {

  constructor(props) {
    super(props);

    this.searchInput = React.createRef();
    this.booksTable = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <h2>All Books</h2>
        <input ref={this.searchInput}/>
        <button onClick={this.searchButtonClickHandler}>search</button>
        <BooksTable ref={this.booksTable} sendDataUp={this.getBooksData}/>
      </React.Fragment>
    );
  }

  getBooksData = (data) => {
    this.setState({data});
  };

  searchButtonClickHandler = (event) => {
    let result;
    const searchText = this.searchInput.current.value;

    result = getSearchResult(this.state.data, searchText);

    console.log(result);
    //this.booksTable('bookTable').setState({a:1});
  };
}