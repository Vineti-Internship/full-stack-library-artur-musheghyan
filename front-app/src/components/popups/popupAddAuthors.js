import React from 'react';
import ReactDOM from "react-dom";
import {dataLoader} from "../../utils/api";

export const showAddAuthorPopup = () => {
  ReactDOM.render(<PopupAddAuthor/>, document.getElementById('popupContainer'));
};

const PopupAddAuthor = () => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Book</h2>

        <form id='addBookForm'>
          Name <input type="text" name="name"/><br/>
          Nationality <input type="text" name="nationality"/><br/>
        </form>

        <button onClick={addAuthorClickHandler}>Add</button>
        <button onClick={closePopup}>close</button>
      </div>
    </div>
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