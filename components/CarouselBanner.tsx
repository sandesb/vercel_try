"use client";

import { useMovies } from "@/hooks/useMovies";
import HeroCarousel from "./HeroCarousel";

interface Props {
  id?: string;
  keywords?: string;
}

const CaroselBanner = (isMovie: Boolean) => {
  const { movies, loading, error } = useMovies(isMovie);

  return <HeroCarousel movies={movies} />;
};

export default CaroselBanner;
