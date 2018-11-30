import React, {Component} from 'react';
import './App.css';
import {AuthorsTable} from "./components/authorsTable";
import {showAddAuthorPopup} from "./components/popups/popupAddAuthors";
import {AllBookComponent} from "./components/allBooksComponent";
import {ThemeContext, themes} from "./context/theme_context";

class App extends Component {
  state = {
    theme: themes.dark
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ThemeContext.Consumer>
          {context => (
            <div style={{color: context.textColor}} className="App">
              <header style={{backgroundColor: context.colorA}}>
                <h1>Library</h1>
              </header>

              <main style={{backgroundColor: context.colorB}}  >
                <AllBookComponent/>

                <h2>All Authors</h2>
                <button style={{color: context.textColor, backgroundColor: context.buttonColor}} onClick={addAuthorClickHandler}>add Author</button>
                <AuthorsTable/>
              </main>
              <div id='popupContainer'/>
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    );
  }
}

const addAuthorClickHandler = () => {
  showAddAuthorPopup();
};

export default App;
