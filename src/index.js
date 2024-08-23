import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/Store';
import { ThemeProvider, CssBaseline } from '@mui/material';
import getTheme from './theme_template/Theme';
import { ToastContainer } from 'react-toastify';
import { i18n } from './i18n';

const Root = () => {
  const darkMode = useSelector((state) => state.theme.theme.darkMode); // Ensure correct path
  const language = useSelector((state) => state.theme.language); // Ensure correct path

  React.useEffect(() => {
    i18n.changeLanguage(language); // Update language dynamically
  }, [language]);

  return (
    <ThemeProvider theme={getTheme(darkMode ? 'dark' : 'light')}>
      <CssBaseline />
      <ToastContainer />
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Root />
  </Provider>
);

// Measure performance (optional)
reportWebVitals();
