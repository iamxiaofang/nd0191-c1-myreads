
import { useState, useEffect } from 'react';

// https://medium.com/@sankalpa115/usedebounce-hook-in-react-2c71f02ff8d8
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
