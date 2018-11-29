import React from 'react';
import {dataLoader} from "../utils/api";
import {showEditBookPopup} from "./popups/popupEditBook";

export class BooksTableItem extends React.Component {
  render() {
    return (
      <ul className={'books-table-item'}>
        <li>{this.props.data.title}</li>
        <li>{this.props.data.author.name}</li>
        <li>{this.props.data.language}</li>
        <li>{this.props.data.genre}</li>
        <li>{this.props.data.rating}</li>
        <button onClick={this.deleteClickHandler}>Delete</button>
        <button onClick={this.editClickHandler}>Edit</button>
      </ul>
    );
  }

  deleteClickHandler = () => {
    dataLoader('books', 'DELETE', null, this.props.data.id);
  };

  editClickHandler = () => {
    showEditBookPopup(this.props.data.id);
  };
}

