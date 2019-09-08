import React from 'react';
import ReactDOM from 'react-dom';
import './styles/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { purple, teal } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: teal,
    error: {
      main: '#CF6679',
    },
    type: 'dark',
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
