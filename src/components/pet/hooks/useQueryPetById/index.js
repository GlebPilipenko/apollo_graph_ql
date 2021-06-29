import {loader} from 'graphql.macro';
import {useLazyQuery} from '@apollo/react-hooks';

const queryPetById = loader('./gql/queryPetById.graphql');

export const useQueryPetById = () => {
  const [getPetProfile, {loading, error, data}] = useLazyQuery(queryPetById);

  const petsProfile = data && data.petById;

  return {getPetProfile, loading, error, petsProfile};
};
