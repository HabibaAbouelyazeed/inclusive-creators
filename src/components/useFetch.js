import { useState, useEffect } from 'react';
import fetchData from './ApiService';

const useFetch = (contentType) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      setError('');

      try {
        const fetchedData = await fetchData(contentType);
        setData(fetchedData);
      } catch (err) {
        setError(`Error fetching ${contentType}. Please try again later.`);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [contentType]);

  return { data, isLoading, error };
};

export default useFetch;
