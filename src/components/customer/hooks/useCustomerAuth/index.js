import {loader} from 'graphql.macro';
import {useMutation} from '@apollo/react-hooks';
import {useForm} from '../../../../hooks/useForm';
import {clientFields} from '../../../../constants';

const mutationLogIn = loader('./gql/mutationLogIn.graphql');

export const useCustomerAuth = () => {
  const [loginVerification, {
    loading,
    error,
    data
  }] = useMutation(mutationLogIn);
  const {values, handleChange} = useForm(clientFields);

  const token = data && data.logIn.token;
  const {username, password} = values.client;
  const authorizedCustomer = data && data.logIn.customer;

  const logIn = () => loginVerification({variables: {username, password}});

  if (token) {
    localStorage.setItem('token', token);
  }

  return {loading, error, authorizedCustomer, logIn, handleChange};
};
