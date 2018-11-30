import React from 'react';
import {BooksTable} from "./booksTable";
import {getSearchResult} from "../utils/searcheController";
import {ThemeContext} from "../context/theme_context";

export class AllBookComponent extends React.Component {

  constructor(props) {
    super(props);

    this.searchInput = React.createRef();
    this.booksTable = React.createRef();
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => (
          <React.Fragment>
            <h2>All Books</h2>
            <input style={{color: context.textColor, backgroundColor: context.buttonColor}} ref={this.searchInput}/>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}} onClick={this.searchButtonClickHandler}>search</button>
            <BooksTable ref={this.booksTable} sendDataUp={this.getBooksData}/>
          </React.Fragment>
        )}
      </ThemeContext.Consumer>
    );
  }

  getBooksData = (data) => {
    this.setState({data});
  };

  searchButtonClickHandler = () => {
    let result;
    const searchText = this.searchInput.current.value;

    result = getSearchResult(this.state.data, searchText);

    console.log(result);
    //this.booksTable('bookTable').setState({a:1});
  };
}