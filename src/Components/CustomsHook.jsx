import { useEffect, useState } from "react";

export const useCustom = (url, message, method = "GET") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Something went wrongs`);
        }

        const data = await response.json();
        setData(data.results);
      } catch (err) {
        setError(message);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, message]);
  return { data, error, loading };
};
