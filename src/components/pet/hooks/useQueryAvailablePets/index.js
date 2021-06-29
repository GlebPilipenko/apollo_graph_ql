import {loader} from 'graphql.macro';
import {useQuery} from '@apollo/react-hooks';

const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

export const useQueryAvailablePets = () => useQuery(queryAvailablePets);
