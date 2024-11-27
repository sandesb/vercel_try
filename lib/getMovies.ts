const fetcher = async (url: URL, cacheTime?: number) => {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();

  return data;
};

export const getDiscoverMovies = async () => {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");
  const data = await fetcher(url);
  return data.results;
};

export const getPopularMovies = async () => {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetcher(url);
  return data.results;
};

export const getSearchedMovies = async (term: string) => {
  const url = new URL("https://api.themoviedb.org/3/search/movie");
  url.searchParams.set("query", term);
  console.log(url);

  const data = await fetcher(url);
  return data.results;
};
