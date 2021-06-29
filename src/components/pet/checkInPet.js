import {useCheckInPet} from './hooks/useCheckInPet';

export const CheckInPet = () => {
  const {pet, loading, error, errors, checkInPet} = useCheckInPet();

  const renderJsx = pet && (
    <div>
      <p>{pet.id}</p>
      <p>{pet.name}</p>
    </div>
  );

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (error) {
    return <p>{errors}</p>;
  }

  return (
    <div>
      <h1>CheckInPet</h1>
      <button onClick={() => checkInPet('C-1')}>
        CheckInPet
      </button>
      {renderJsx}
    </div>
  );
};
