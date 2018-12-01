import React from 'react';

export const themes = {
  light: {
    colorA: '#c8e6c9',
    colorB: '#fbfffc',
    buttonColor: '#97b498',
    textColor: '#000000',
    warningColor: '#d32f2f'
  },
  dark: {
    colorA: '#263238',
    colorB: '#4f5b62',
    buttonColor: '#000a12',
    textColor: '#ffffff',
    warningColor: '#c62828'
  }
};

export const ThemeContext = React.createContext(themes.dark);