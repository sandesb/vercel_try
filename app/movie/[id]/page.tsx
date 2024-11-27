"use client";

import MovieContainer from "@/components/MovieContainer";
import { getImagePath } from "@/hooks/getImagePath";
import { useMovieId } from "@/hooks/useMovies";

import { Metadata } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const MovieDetails = ({ params: { id } }: Props) => {
  const { movies, loading, error } = useMovieId(id);
  console.log(movies);

  return (
    <div className="mt-24">
      <div className="px-10">
        <div className="py-10 flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-1/2 md:min-h-96 rounded-md overflow-hidden group">
            <Image
              src={getImagePath(movies?.backdrop_path)}
              alt={movies?.title || "Poster"}
              width={1920}
              height={1080}
              className="w-full rounded-md h-full object-cover shadow-md shadow-gray-900 drop-shadow-xl group-hover:scale-110 duration-500"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold underline decoration-[1px]">
              {movies?.original_title}
            </h2>
            <p className="text-sm leading-6 tracking-wide mt-2">
              {movies?.overview}
            </p>
            <p className="text-gray-200 text-sm">
              IMDB:{" "}
              <span className="text-white font-medium">
                {movies.vote_average}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Votes:{" "}
              <span className="text-white font-medium">
                {movies.vote_count}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Release Data:{" "}
              <span className="text-white font-medium">
                {movies.release_date}
              </span>
            </p>
            <p className="text-gray-200 text-sm">
              Genres:{" "}
              {/* {movies?.genres.map((item: any) => (
                <span key={item?.id} className="text-white font-medium mr-1">
                  {item?.name},
                </span>
              ))} */}
            </p>
            <p className="text-gray-200 text-sm">
              Tag Line:{" "}
              <span className="text-white font-medium">{movies?.tagline}</span>
            </p>
            <p className="text-gray-200 text-sm">
              Status:{" "}
              <span
                className={`font-medium ${
                  movies?.status === "Released"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {movies?.status}
              </span>
            </p>
          </div>
        </div>
      </div>
      {loading && (
        <p className="text-lg text-gray-500 px-10">Loading search results...</p>
      )}

      {error && (
        <p className="text-lg text-red-600 px-10">
          Something went wrong: {error}. Please try again.
        </p>
      )}

      {!loading && !error && movies?.length > 0 && (
        <div className="mt-6">
          <MovieContainer movies={movies} title="Popular Movies" isVertical />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
