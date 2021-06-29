import {useCheckOutPet} from './hooks/useCheckOutPet';

export const CheckOutPet = () => {
  const {pet, loading, error, errors, checkOutPet} = useCheckOutPet();

  const renderJsx = pet && (
    <div><p>{pet.name}</p></div>
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
      <div>
        <h1>Check Out Pet</h1>
        <button onClick={() => checkOutPet('C-1')}>
          CheckOutPet
        </button>
        {renderJsx}
      </div>
    </div>
  );
};
