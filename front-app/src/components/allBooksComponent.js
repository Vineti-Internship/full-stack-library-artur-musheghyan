import React from 'react';
import {BooksTable} from "./booksTable";
import {getSearchResult} from "../utils/searcheController";
import {ThemeContext} from "../context/theme_context";
import {SearchTable, setSearchData} from "./searchTable";

export class AllBookComponent extends React.Component {

  state = {
    isSearchView: false,
    data: {},
    searchData: []
  };

  constructor(props) {
    super(props);

    this.searchInput = React.createRef();
    this.booksTable = React.createRef();
  }

  render() {
    let tableView;

    if (this.state.isSearchView == true) {
      tableView = <SearchTable data={this.state.searchData}/>;
    } else {
      tableView = <BooksTable ref ={this.booksTable} sendDataUp={this.getBooksData}/>;
    }

    return (
      <ThemeContext.Consumer>
        {context => (
          <React.Fragment>
            <h2>All Books</h2>
            <input onChange={this.inputChangeHandler} placeholder='search' title='search'
                   style={{color: context.textColor, backgroundColor: context.buttonColor}} ref={this.searchInput}/>
            {tableView}
          </React.Fragment>
        )}
      </ThemeContext.Consumer>
    );
  }

  inputChangeHandler = (event) => {
    if (event.target.value === '') {
      this.setState({isSearchView: false});
    } else {
      this.setState({isSearchView: true});
    }

    const searchText = this.searchInput.current.value;

    const result = getSearchResult(this.state.data, searchText);

    this.setState({searchData: result});
  };

  getBooksData = (data) => {
    this.setState({data});
  };
}