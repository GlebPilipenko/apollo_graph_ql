import {useQueryAllAvailablePets} from './hooks/useQueryAllAvailablePets';

export const SpecialList = () => {
  const {
    getAllAvailablePets,
    loading,
    error,
    pets
  } = useQueryAllAvailablePets();

  const getJsx = pets.map(({id, name, weight}) => {
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

  return (
    <div>
      <button onClick={getAllAvailablePets}>
        Get Special List
      </button>
      {getJsx}
    </div>
  );
};
