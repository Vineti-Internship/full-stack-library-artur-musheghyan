import React from 'react';
import {BooksTableItem} from "./booksTableItem";
import {ThemeContext} from "../context/theme_context";

export const SearchTable = (props) => {
  let view;

  let listItems = initTableItems(props.data);

  view = <ul>{listItems}</ul>;

  return (<ThemeContext.Consumer>
    {context => (
      <div style={{backgroundColor: context.colorB}} className={'test-books-table'}>
        {view}
      </div>
    )}
  </ThemeContext.Consumer>);
};

const initTableItems = (data) => {
  const listItems = data.map((element) =>
    <li key={element.id}><BooksTableItem data={element}/></li>
  );

  return listItems;
};