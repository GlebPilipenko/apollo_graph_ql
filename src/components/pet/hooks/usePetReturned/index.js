import {loader} from 'graphql.macro';
import {useSubscription} from '@apollo/react-hooks';

const subscriptionPetReturned = loader('./gql/subscriptionPetReturned.graphql');

export const usePetReturned = () => {
  const {error, data} = useSubscription(subscriptionPetReturned);

  const pet = data && data.petReturned.pet;

  return {error, pet};
};
