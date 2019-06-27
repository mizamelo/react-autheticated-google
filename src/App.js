import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './routes/history';
import store from './store';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </ConnectedRouter>
  </Provider>
);

export default App;
