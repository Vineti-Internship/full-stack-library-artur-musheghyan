import React from 'react';
import {showAddBookPopup} from "./popups/popupAddBook";
import {ThemeContext} from "../context/theme_context";

export class AuthorsTableItem extends React.Component{
  render() {
    return (
      <ThemeContext.Consumer>
        {context => (
          <ul style={{backgroundColor: context.colorA}} className={'books-table-item'}>
            <li>{this.props.data.name}</li>
            <li>{this.props.data.nationality}</li>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}} onClick={this.onclickHandler}>add Book</button>
          </ul>
        )}
      </ThemeContext.Consumer>
    );
  }

  onclickHandler = () => {
    showAddBookPopup(this.props.data.id);
  };
}