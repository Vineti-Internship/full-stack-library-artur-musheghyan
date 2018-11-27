import React from 'react';
import {dataLoader} from "../utils/api";
import {LoadingBar} from "./loadingBar";
import {AuthorsTableItem} from "./authorsTableItem";

export class AuthorsTable extends React.Component {

  state = {
    isLoading: true,
    data: {}
  };

  loadData = async () => {
    this.setState({isLoading: true});
    const data = await dataLoader('authors', 'GET');

    this.initTableItems(data);
  };

  initTableItems = (data) => {
    const listItems = data.map((element) =>
      <li key={element.id}><AuthorsTableItem data={element}/></li>
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