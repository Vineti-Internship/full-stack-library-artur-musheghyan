import React from 'react';

export const themes = {
  light: {
    colorA: '#c8e6c9',
    colorB: '#fbfffc',
    buttonColor: '#97b498',
    textColor: '#000000'
  },
  dark: {
    colorA: '#263238',
    colorB: '#4f5b62',
    buttonColor: '#000a12',
    textColor: '#ffffff'
  }
};

export const ThemeContext = React.createContext(themes.dark);