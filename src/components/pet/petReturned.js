import {usePetReturned} from './hooks/usePetReturned';

export const PetReturned = () => {
  const {error, pet} = usePetReturned();

  const renderJsx = pet && (
    <div>
      <p>{pet.id}</p>
      <p>{pet.name}</p>
    </div>
  )

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>Pet Returned</h1>
      {renderJsx}
    </div>
  );
};
