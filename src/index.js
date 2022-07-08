import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GithubProvider>
      <Router>
        <App />
      </Router>
    </GithubProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
