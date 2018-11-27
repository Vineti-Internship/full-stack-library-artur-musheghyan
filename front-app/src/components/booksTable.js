import React from 'react';
import {BooksTableItem} from "./booksTableItem";
import {LoadingBar} from "./loadingBar";
import {dataLoader} from "../utils/api";

export class BooksTable extends React.Component {

  state = {
    isLoading: true,
    data: {}
  };

  loadData = async () => {
    this.setState({isLoading: true});
    const data = await dataLoader('books', 'GET');

    this.initTableItems(data);
  };

  initTableItems = (data) => {
    const listItems = data.map((element) =>
      <li key={element.id}><BooksTableItem data={element}/></li>
    );

    this.setState({
      isLoading: false,
      listItems: listItems
    });
  };

  render() {
    let view;

    if (this.state.isLoading) {
      view = <LoadingBar/>
    } else {
      view = <ul>{this.state.listItems}</ul>;
    }

    return (<div className={'test-books-table'}>{view}</div>);
  }

  componentDidMount() {
    this.loadData();
  }
}