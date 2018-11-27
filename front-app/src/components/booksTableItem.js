import React from 'react';

export const BooksTableItem = (props) => {
  return (
    <ul className={'books-table-item'}>
      <li>{props.data.title}</li>
      <li>{props.data.author.name}</li>
      <li>{props.data.language}</li>
      <li>{props.data.genre}</li>
      <li>{props.data.rating}</li>
    </ul>
  );
};