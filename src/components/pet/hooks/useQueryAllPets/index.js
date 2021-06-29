import {loader} from 'graphql.macro';
import {useQuery} from '@apollo/react-hooks';

const queryAllPets = loader('./gql/queryAllPets.graphql');

export const useQueryAllPets = () => {
  const {loading, error, data} = useQuery(queryAllPets);
  const pets = data ? data.allPets : [];

  return {loading, error, pets};
};
