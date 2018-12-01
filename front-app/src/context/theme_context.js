import React from 'react';

export const themes = {
  light: {
    colorA: '#c8e6c9',
    colorB: '#fbfffc',
    buttonColor: '#97b498',
    textColor: '#000000',
    warningColor: '#d32f2f',
    editColor: '#ffee58'
  },
  dark: {
    colorA: '#263238',
    colorB: '#4f5b62',
    buttonColor: '#000a12',
    textColor: '#ffffff',
    warningColor: '#c62828',
    editColor: '#80e27e'

  }
};

export const ThemeContext = React.createContext(themes.dark);