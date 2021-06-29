import {useState} from 'react';

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = e => {
    setValues({
      client: {
        ...values.client,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    });
  };

  return {values, handleChange};
};
