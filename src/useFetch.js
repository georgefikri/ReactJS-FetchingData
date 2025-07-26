import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

export default useFetch;
