import {loader} from 'graphql.macro';
import {useMutation} from '@apollo/react-hooks';
import {useState} from 'react';

const mutationCheckOutPet = loader('./gql/mutationCheckOutPet.graphql');

export const useCheckOutPet = () => {
  const [errors, setErrors] = useState(false);
  const [checkOut, {loading, error, data}] = useMutation(mutationCheckOutPet);

  const pet = data && data.checkOut.pet;

  const checkOutPet = (id) => {
    (async () => {
      try {
        await checkOut({
          variables: {id}
        });
      } catch (e) {
        setErrors(e.message);
      }
    })();
  };

  return {pet, loading, error, errors, checkOutPet};
};
