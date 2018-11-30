import React from 'react';
import {dataLoader, EVENT_DATA_SHOULD_UPDATE} from "../utils/api";
import {LoadingBar} from "./loadingBar";
import {AuthorsTableItem} from "./authorsTableItem";
import {ThemeContext} from "../context/theme_context";

export class AuthorsTable extends React.Component {

  state = {
    isLoading: true,
    data: {}
  };

  constructor(props) {
    super(props);
    document.addEventListener(EVENT_DATA_SHOULD_UPDATE, this.loadData);
  }

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

    return (
      <ThemeContext.Consumer>
        {context => (
          <div style={{backgroundColor: context.colorB}} className={'test-books-table'}>
            {view}
          </div>
        )}
      </ThemeContext.Consumer>);
  }

  componentDidMount() {
    this.loadData();
  }
}