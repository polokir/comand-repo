import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';
import testContext from 'context/testContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <testContext.Provider value={{ text: 'first-context' }}>
        <App />
      </testContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
