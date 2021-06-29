import {useMutationCreateAccount} from './hooks/useCreateCustomer';

export const Customer = () => {
  const {
    loading,
    error,
    createdCustomer,
    handleChange,
    saveCustomer
  } = useMutationCreateAccount();

  const renderJsx = createdCustomer && (
    <p>{`We created a new account ${createdCustomer.name}`}</p>
  );

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="username" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      {renderJsx}
      <button onClick={saveCustomer}>Click</button>
    </div>
  );
};
