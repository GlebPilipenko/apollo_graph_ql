import {useQueryAllPets} from './hooks/useQueryAllPets';

export const List = () => {
  const {loading, error, pets} = useQueryAllPets();

  const getJsx = () => pets.map(({id, name, weight}) => {
    return (
      <p key={id}>
        <span>{`${id} `}</span>
        <span>{`${name} `}</span>
        <span>{`${weight} `}</span>
      </p>
    );
  });

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return getJsx();
};
