import React from 'react';
import ReactDOM from "react-dom";
import {dataLoader} from "../../utils/api";

let bookId;

export const showEditBookPopup = (id) => {
  bookId = id;

  ReactDOM.render(<PopupEditBook/>, document.getElementById('popupContainer'));
};

const PopupEditBook = () => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Edit Book</h2>

        <form id='editBookForm'>
          Title <input type="text" name="title"/><br/>
          Language <input type="text" name="language"/><br/>
          Genre <input type="text" name="genre"/><br/>
          Publisher <input type="text" name="publisher"/><br/>
          Publication Date <input type="text" name="publication_data"/><br/>
          Rating <input type="text" name="rating"/><br/>
        </form>
        <button onClick={addBookClickHandler}>Edit</button>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  );
};

const addBookClickHandler = () => {
  const elems = document.getElementById('editBookForm').elements;

  const data = {
    title: elems.title.value,
    language: elems.language.value,
    genre: elems.genre.value,
    publisher: elems.publisher.value,
    publication_data: elems.publication_data.value,
    rating: elems.rating.value,
  };

  for (let dataKey in data) {
    if(data[dataKey] === ''){
      delete data[dataKey];
    }
  }

  dataLoader('books', 'PATCH', data, bookId);
  closePopup();
};

const closePopup = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('popupContainer'));
};
