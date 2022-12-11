import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'utils/GlobalStyle';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/luna-edge_test-task/">
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
