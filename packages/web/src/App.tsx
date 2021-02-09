import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import AppProvider from './hooks';

import GlobalStyle from './styles/globals';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Router>
);

export default App;
