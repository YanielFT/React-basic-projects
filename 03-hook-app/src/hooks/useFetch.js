import { useEffect, useState } from "react";

const localcache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      //"https://pokeapi.co/api/v2/pokemon/1"
      if (localcache[url] ) {
        console.log("loading localcache");

        setState((prev) => ({
          ...prev,
          data: localcache[url],
          isLoading: false,
        }));
        return;
      }

      try {
        setState((prev) => ({ ...prev, isLoading: true }));
        const response = await fetch(url);

        if (!response.ok) {
          setState((prev) => ({
            ...prev,
            hasError: true,
            isLoading: false,
            error: `Error haciendo fetch`,
          }));
          return;
        }

        const data = await response.json();
        localcache[url] = data;
        setState((prev) => ({ ...prev, data: data, isLoading: false }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          hasError: true,
          isLoading: false,
          error: `Error haciendo fetch ${error}`,
        }));
      }
    };
    getFetch();
  }, [url]);

  return {
    ...state,
  };
};
