import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Calendar from './views/Calendar';

const client = new ApolloClient({
  uri: 'http://localhost:4000', // My GraphQL server URL
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Calendar />
    </ApolloProvider>
  );
};

export default App;
