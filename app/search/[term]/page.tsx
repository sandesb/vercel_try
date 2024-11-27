"use client";

import MovieContainer from "@/components/MovieContainer";
import { useSearch } from "@/hooks/useMovies";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";

interface Props {
  params: {
    term: string;
  };
}

const SearchPage = ({ params: { term } }: Props) => {
  const termToUse = decodeURI(term);
  const { data, loading, error } = useSearch(termToUse);
  // console.log(movies);

  return (
    <div className="py-10 max-w-screen-xl mx-auto">
      <h2 className="text-4xl font-bold px-10 mt-24 mb-5">
        Results for {termToUse}
      </h2>
      {loading && (
        <p className="text-lg text-gray-500 px-10">Loading search results...</p>
      )}

      {error && (
        <p className="text-lg text-red-600 px-10">
          Something went wrong: {error}. Please try again.
        </p>
      )}

      {!loading && !error && data?.length === 0 && (
        <p className="text-lg text-gray-500 px-10">
          No results found for "{termToUse}". Try searching for something else.
        </p>
      )}

      {!loading && !error && data?.length > 0 && (
        <MovieContainer
          title={`Search Results for "${termToUse}"`}
          movies={data}
          isLoading={loading}
        />
      )}
    </div>
  );
};

export default SearchPage;
