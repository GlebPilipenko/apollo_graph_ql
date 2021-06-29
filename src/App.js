import {client} from './init/client';
import {ApolloProvider} from '@apollo/react-hooks';
import {Customer} from './components/customer';
import {Login} from './components/customer/components/login';

export const App = () => (
  <ApolloProvider client={client}>
    <Login />
    <Customer />
    {/*<Pet />*/}
  </ApolloProvider>
);
