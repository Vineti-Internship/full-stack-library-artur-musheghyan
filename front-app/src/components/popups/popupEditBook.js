import React from 'react';
import ReactDOM from "react-dom";
import {dataLoader} from "../../utils/api";
import {ThemeContext} from "../../context/theme_context";

let bookId;
const editBookForm = React.createRef();

export const showEditBookPopup = (id) => {
  bookId = id;

  ReactDOM.render(<PopupEditBook/>, document.getElementById('popupContainer'));
};

const PopupEditBook = () => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <div className="popup">
          <div style={{backgroundColor: context.colorA}} className="popup-content">
            <h2>Edit Book</h2>

            <form ref={editBookForm}>
              Title <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text"
                           name="title"/><br/>
              Language <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text"
                              name="language"/><br/>
              Genre <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text"
                           name="genre"/><br/>
              Publisher <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text"
                               name="publisher"/><br/>
              Publication Date <input style={{color: context.textColor, backgroundColor: context.buttonColor}}
                                      type="text" name="publication_data"/><br/>
              Rating <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text"
                            name="rating"/><br/>
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
  const elems = editBookForm.current.elements;

  const data = {
    title: elems.title.value,
    language: elems.language.value,
    genre: elems.genre.value,
    publisher: elems.publisher.value,
    publication_data: elems.publication_data.value,
    rating: elems.rating.value,
  };

  for (let dataKey in data) {
    if (data[dataKey] === '') {
      delete data[dataKey];
    }
  }

  dataLoader('books', 'PATCH', data, bookId);
  closePopup();
};

const closePopup = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('popupContainer'));
};
