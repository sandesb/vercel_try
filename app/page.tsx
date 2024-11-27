"use client";

import CaroselBanner from "@/components/CarouselBanner";
import MovieContainer from "@/components/MovieContainer";
import { useMovies } from "@/hooks/useMovies";

import { useState } from "react";

export default function Home() {
  const [isMovie, setIsMovie] = useState(true);
  const { movies, loading, error } = useMovies(isMovie);

  if (error) return <div className="my-40">{error}</div>;

  return (
    <main className="relative min-h-screen flex justify-center items-center flex-col overflow-hidden mx-auto">
      <CaroselBanner isMovie />

      <div className="w-full py-10">
        <div className="flex flex-col space-y-2">
          <MovieContainer
            title="Popular Movies"
            movies={movies}
            isLoading={loading}
            setIsMovie={setIsMovie}
          />
          {/* <MovieContainer movies={upcomingMovies} title="Upcoming" />
          <MovieContainer movies={topRatedMovies} title="Top Rated" /> */}
        </div>
      </div>
    </main>
  );
}
