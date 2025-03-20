import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gif, setGif] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchGif = async () => {
      setIsLoading(true);
      const gifts = await getGifs(category);
      setGif(gifts);
      setIsLoading(false);
    };
    searchGif();
  }, [category]);

  return {
    images: gif,
    isLoading,
  };
};
