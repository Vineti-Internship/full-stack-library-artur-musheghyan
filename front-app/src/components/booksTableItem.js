import React from 'react';
import {dataLoader} from "../utils/api";
import {showEditBookPopup} from "./popups/popupEditBook";
import {ThemeContext} from "../context/theme_context";

export class BooksTableItem extends React.Component {
  render() {
    return (

      <ThemeContext.Consumer>
        {context => (
          <ul style={{backgroundColor: context.colorA}} className={'books-table-item'}>
            <li>{this.props.data.title}</li>
            <li>{this.props.data.author.name}</li>
            <li>{this.props.data.language}</li>
            <li>{this.props.data.genre}</li>
            <li>{this.props.data.rating}</li>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}} onClick={this.deleteClickHandler}>Delete</button>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}} onClick={this.editClickHandler}>Edit</button>
          </ul>
        )}
      </ThemeContext.Consumer>
    );
  }

  deleteClickHandler = () => {
    dataLoader('books', 'DELETE', null, this.props.data.id);
  };

  editClickHandler = () => {
    showEditBookPopup(this.props.data.id);
  };
}

