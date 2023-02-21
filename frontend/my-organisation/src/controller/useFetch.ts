import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url: string, options?: any) {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setLoading(null);
        res.data.seededTree && setData(res.data.seededTree);
      })
      .catch((err) => {
        setLoading(null);
        setError("An error occurred. Awkward..");
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
