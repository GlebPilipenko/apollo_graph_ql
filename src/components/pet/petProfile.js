import {useQueryPetById} from './hooks/useQueryPetById';

export const PetProfile = () => {
  const {getPetProfile, loading, error, petsProfile} = useQueryPetById();

  const loadPetProfile = () => getPetProfile({
    variables: {
      id: 'C-2',
    },
  });
  const renderPetsProfile = petsProfile && (
    <div>
      <span>{petsProfile.id}</span>
      <span>{petsProfile.name}</span>
    </div>
  );

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <button onClick={loadPetProfile}>
        Get Pet Profile
      </button>
      {renderPetsProfile}
    </div>
  );
};
