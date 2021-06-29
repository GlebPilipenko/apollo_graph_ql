import {split} from 'apollo-link';
import {ApolloClient} from 'apollo-client';
import {WebSocketLink} from 'apollo-link-ws';
import {setContext} from 'apollo-link-context';
import {createHttpLink} from 'apollo-link-http';
import {getMainDefinition} from 'apollo-utilities';
import {InMemoryCache} from 'apollo-cache-inmemory';

// GraphQL Server
const rootUri = 'funded-pet-library.moonhighway.com/';
const uri = `https://${rootUri}`;
const httpLink = new createHttpLink({uri});

// WS
const wsLink = new WebSocketLink({
  uri: `ws://${rootUri}graphql`,
  options: {reconnect: true}
});

// Cache
const cache = new InMemoryCache();

// Link
const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const wrappedHttpLink = authLink.concat(httpLink);

const link = split(({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  wrappedHttpLink,
);

export const client = new ApolloClient({link, cache});
