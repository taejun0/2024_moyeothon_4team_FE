import { useState, useEffect } from "react";
import { getReceivedLetters, getSentLetters } from "@services/lettergiveService";

export const usegiveLetters = (type) => {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLetters = async () => {
      setLoading(true);
      try {
        const data = type === "received" ? await getReceivedLetters() : await getSentLetters();
        setLetters(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLetters();
  }, [type]);

  return { letters, loading, error };
};
