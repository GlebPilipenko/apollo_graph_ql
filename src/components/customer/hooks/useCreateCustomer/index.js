import {loader} from 'graphql.macro';
import {useMutation} from '@apollo/react-hooks';
import {useForm} from '../../../../hooks/useForm';
import {clientFields} from '../../../../constants';

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useMutationCreateAccount = () => {
  const {values, handleChange} = useForm(clientFields);
  const [addUser, {loading, error, data}] = useMutation(mutationCreateAccount);

  const createdCustomer = data && data.createAccount;

  const saveCustomer = () => addUser({variables: {input: values.client}});

  return {
    loading,
    error,
    createdCustomer,
    handleChange,
    saveCustomer,
  };
};
