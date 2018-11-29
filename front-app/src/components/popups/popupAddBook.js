import React from 'react';
import ReactDOM from "react-dom";
import {dataLoader} from "../../utils/api";

export const showAddBookPopup = (id) => {
  ReactDOM.render(<PopupAddBook authorId={id}/>, document.getElementById('popupContainer'));
};

const PopupAddBook = (props) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Book</h2>

        <form id='addBookForm'>
          Title <input type="text" name="title"/><br/>
          Language <input type="text" name="language"/><br/>
          Genre <input type="text" name="genre"/><br/>
          Publisher <input type="text" name="publisher"/><br/>
          Publication Date <input type="text" name="publication_data"/><br/>
          Rating <input type="text" name="rating"/><br/>
          Author ID <input type="text" name="author_id"
                           readOnly="readOnly" value={props.authorId}/><br/>
        </form>
        <button onClick={addBookClickHandler}>Add</button>
        <button onClick={closePopup}>close</button>
      </div>
    </div>
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
  updateContent();
};

const updateContent = () =>{
  dispatchEvent(new Event("update_books_content"));
};

const closePopup = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('popupContainer'));
};
