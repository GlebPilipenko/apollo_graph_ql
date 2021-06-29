import {useCustomerAuth} from '../../hooks/useCustomerAuth';

export const Login = () => {
  const {
    loading,
    error,
    authorizedCustomer,
    logIn,
    handleChange
  } = useCustomerAuth();

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const renderJsx = authorizedCustomer && (
    <p>{`Customer - ${authorizedCustomer.name} is logged in.`}</p>
  );

  return (
    <div>
      <input type="text" name="username" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <button onClick={logIn}>Login</button>
      {renderJsx}
    </div>
  );
};
