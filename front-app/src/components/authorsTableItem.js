import React from 'react';
import {showAddBookPopup} from "./popups/popupAddBook";
import {ThemeContext} from "../context/theme_context";
import {showEditAuthorPopup} from "./popups/popupEditAuthor";
import {dataLoader} from "../utils/api";

export class AuthorsTableItem extends React.Component{
  render() {
    return (
      <ThemeContext.Consumer>
        {context => (
          <ul style={{backgroundColor: context.colorA}} className={'books-table-item'}>
            <li>{this.props.data.name}</li>
            <li>{this.props.data.nationality}</li>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}} onClick={this.addBookButtonClickHandler}>add Book</button>
            <button style={{color: context.warningColor, backgroundColor: context.buttonColor}} onClick={this.deleteAuthorButtonClickHandler}>Delete</button>
            <button style={{color: context.editColor, backgroundColor: context.buttonColor}} onClick={this.editAuthorButtonClickHandler}>Edit</button>
          </ul>
        )}
      </ThemeContext.Consumer>
    );
  }

  addBookButtonClickHandler = () => {
    showAddBookPopup(this.props.data.id);
  };

  editAuthorButtonClickHandler = () => {
    showEditAuthorPopup(this.props.data.id);
  };

  deleteAuthorButtonClickHandler = () => {
    dataLoader('authors', 'DELETE', null, this.props.data.id);
  };
}