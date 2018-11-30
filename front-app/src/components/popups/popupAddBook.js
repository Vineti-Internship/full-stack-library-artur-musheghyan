import React from 'react';
import ReactDOM from "react-dom";
import {dataLoader} from "../../utils/api";
import {ThemeContext} from "../../context/theme_context";

export const showAddBookPopup = (id) => {
  ReactDOM.render(<PopupAddBook authorId={id}/>, document.getElementById('popupContainer'));
};

const PopupAddBook = (props) => {
  return (
    <ThemeContext.Consumer>
      {context => (
        <div className="popup">
          <div style={{backgroundColor: context.colorA}} className="popup-content">
            <h2>Add Book</h2>

            <form id='addBookForm'>
              Title <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text" name="title"/><br/>
              Language <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text" name="language"/><br/>
              Genre <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text" name="genre"/><br/>
              Publisher <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text" name="publisher"/><br/>
              Publication Date <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text" name="publication_data"/><br/>
              Rating <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text" name="rating"/><br/>
              Author ID <input style={{color: context.textColor, backgroundColor: context.buttonColor}} type="text" name="author_id"
                               readOnly="readOnly" value={props.authorId}/><br/>
            </form>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}} onClick={addBookClickHandler}>Add</button>
            <button style={{color: context.textColor, backgroundColor: context.buttonColor}} onClick={closePopup}>close</button>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

const addBookClickHandler = () => {
  const elems = document.getElementById('addBookForm').elements;

  const data = {
    title: elems.title.value,
    language: elems.language.value,
    genre: elems.genre.value,
    publisher: elems.publisher.value,
    publication_data: elems.publication_data.value,
    rating: elems.rating.value,
    author_id: elems.author_id.value
  };

  dataLoader('books', 'POST', data);
  closePopup();
};

const closePopup = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('popupContainer'));
};
