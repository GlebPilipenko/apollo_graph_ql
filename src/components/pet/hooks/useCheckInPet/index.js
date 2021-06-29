import {loader} from 'graphql.macro';
import {useMutation} from '@apollo/react-hooks';
import {useState} from 'react';

const mutationCheckInPet = loader('./gql/mutationCheckInPet.graphql');

export const useCheckInPet = () => {
  const [errors, setErrors] = useState(false);
  const [checkIn, {loading, error, data}] = useMutation(mutationCheckInPet);

  const pet = data && data.checkIn.pet;

  const checkInPet = (id) => {
    (async () => {
      try {
        await checkIn({
          variables: {id}
        });
      } catch (e) {
        setErrors(e.message);
      }
    })();
  };

  return {pet, loading, error, errors, checkInPet};
};
