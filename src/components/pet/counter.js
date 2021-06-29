import {useQueryAvailablePets} from './hooks/useQueryAvailablePets';

export const Counter = () => {
  const {loading, error, data} = useQueryAvailablePets();

  if (loading) {
    return <p>Data is loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return <h1>{data.availablePets}</h1>;
};
