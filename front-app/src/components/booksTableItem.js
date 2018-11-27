import React from 'react';

export class BooksTableItem extends React.Component {
  render() {
    return (
      <ul className={'books-table-item'}>
        <li>{this.props.data.title}</li>
        <li>{this.props.data.author.name}</li>
        <li>{this.props.data.language}</li>
        <li>{this.props.data.genre}</li>
        <li>{this.props.data.rating}</li>
      </ul>
    );
  }
}