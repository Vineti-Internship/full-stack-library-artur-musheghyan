import React from 'react';
import ReactDOM from "react-dom";
import {dataLoader} from "../../utils/api";
import {ThemeContext} from "../../context/theme_context";

export const showAddAuthorPopup = () => {
  ReactDOM.render(<PopupAddAuthor/>, document.getElementById('popupContainer'));
};

const PopupAddAuthor = () => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <div className="popup">
          <div style={{backgroundColor: context.colorA}} className="popup-content">
            <h2>Add Book</h2>

            <form id='addBookForm'>
              Name <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text"
                          name="name"/><br/>
              Nationality <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text"
                                 name="nationality"/><br/>
            </form>

            <button style={{color: context.textColor, backgroundColor: context.buttonColor}}
                    onClick={addAuthorClickHandler}>Add
            </button>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}}
                    onClick={closePopup}>close
            </button>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};


const addAuthorClickHandler = () => {
  const elems = document.getElementById('addBookForm').elements;

  const data = {
    name: elems.name.value,
    nationality: elems.nationality.value,
  };

  dataLoader('authors', 'POST', data);
  closePopup();
};

const closePopup = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('popupContainer'));
};