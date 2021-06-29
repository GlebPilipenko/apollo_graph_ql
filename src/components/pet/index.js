import {List} from './list';
import {Counter} from './counter';
import {PetProfile} from './petProfile';
import {CheckInPet} from './checkInPet';
import {CheckOutPet} from './checkOutPet';
import {PetReturned} from './petReturned';
import {SpecialList} from './specialList';

export const Pet = () => {
  return (
    <>
      <List />
      <Counter />
      <PetProfile />
      <CheckInPet />
      <CheckOutPet />
      <SpecialList />
      <PetReturned />
    </>
  );
};
