import { useEffect, useState } from "react";
import { getGifs } from "../api/Gif";

const useFetchGifs = ( category ) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async(category) => {
    const gifs = await getGifs(category);
    setGifs(gifs);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages(category);
  }, [category]);
  
  return {
    isLoading,
    gifs
  }
}

export default useFetchGifs
