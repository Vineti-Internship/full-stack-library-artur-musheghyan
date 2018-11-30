import React from 'react';
import {BooksTableItem} from "./booksTableItem";
import {LoadingBar} from "./loadingBar";
import {dataLoader, EVENT_DATA_SHOULD_UPDATE} from "../utils/api";
import {ThemeContext} from "../context/theme_context";

export class BooksTable extends React.Component {

  state = {
    isLoading: true,
    listItems: {},
  };

  constructor(props) {
    super(props);
    document.addEventListener(EVENT_DATA_SHOULD_UPDATE, this.loadData);
  }

  loadData = async () => {
    this.setState({isLoading: true});
    const data = await dataLoader('books', 'GET');

    this.props.sendDataUp(data);

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

    return (
      <ThemeContext.Consumer>
        {context => (
          <div style={{backgroundColor: context.colorB}} className={'test-books-table'}>
            {view}
          </div>
        )}
      </ThemeContext.Consumer>
      );
  }

  componentDidMount() {
    this.loadData();
  }
}