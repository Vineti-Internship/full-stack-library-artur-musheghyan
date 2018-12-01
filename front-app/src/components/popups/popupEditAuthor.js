import React from 'react';
import ReactDOM from "react-dom";
import {dataLoader} from "../../utils/api";
import {ThemeContext} from "../../context/theme_context";

const editAuthorForm = React.createRef();
let authorId;

export const showEditAuthorPopup = (id) => {
  authorId = id;
  ReactDOM.render(<PopupEditBook/>, document.getElementById('popupContainer'));
};

const PopupEditBook = () => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <div className="popup">
          <div style={{backgroundColor: context.colorA}} className="popup-content">
            <h2>Edit Book</h2>

            <form ref={editAuthorForm}>
              Name <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text"
                           name="title"/><br/>
              Nationality <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text"
                              name="language"/><br/>
            </form>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}}
                    onClick={addBookClickHandler}>Edit
            </button>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}}
                    onClick={closePopup}>Close
            </button>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

const addBookClickHandler = () => {
  const elems = editAuthorForm.current.elements;

  const data = {
    name: elems.title.value,
    nationality: elems.language.value
  };

  for (let dataKey in data) {
    if (data[dataKey] === '') {
      delete data[dataKey];
    }
  }

  console.log('asd ', data, 'id ', authorId);
  dataLoader('authors', 'PATCH', data, authorId);
  closePopup();
};

const closePopup = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('popupContainer'));
};