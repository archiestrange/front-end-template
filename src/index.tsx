import React from 'react';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { CssBaseline } from '@mui/material';
import ReactDOM from 'react-dom/client';

import { App } from './App';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'TODO: Add this when we have a live endpoint',
  cache: new InMemoryCache(),
});

// const firebaseConfig = {
//   storageBucket: 'TODO: Add this when firebase is setup',
// };

// TODO: Uncomment this when the above storage bucket is configured
// initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ApolloProvider>,
);
