import { useState, useEffect } from 'react';

export const useFormattedDate = (date) => {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(
    () => (
      setFormattedDate(new Date(date).toLocaleDateString())
    ),
    [date]
  );

  return formattedDate;
}

export default useFormattedDate;
