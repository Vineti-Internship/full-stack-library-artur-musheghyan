import React from 'react';

export const AuthorsTableItem = (props) => {
  return (
    <ul className={'books-table-item'}>
      <li>{props.data.name}</li>
      <li>{props.data.nationality}</li>
      <button>add Book</button>
    </ul>
  );
};