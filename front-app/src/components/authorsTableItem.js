import React from 'react';
import {showAddBookPopup} from "./popups/popupAddElement";

export class AuthorsTableItem extends React.Component{
  render() {
    return (
      <ul className={'books-table-item'}>
        <li>{this.props.data.name}</li>
        <li>{this.props.data.nationality}</li>
        <button onClick={this.onclickHandler}>add Book</button>
      </ul>
    );
  }

  onclickHandler = (event) => {
    showAddBookPopup(this.props.data.id);
  };
}