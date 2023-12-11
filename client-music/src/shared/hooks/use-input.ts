import { useState } from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (value: string) => {
    setValue(value);
  };

  return {
    value,
    onChange,
  };
};
