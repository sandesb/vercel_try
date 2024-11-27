import { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";

const API_URL = "https://api.themoviedb.org/3";

export const useMovies = (isMovie: Boolean) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY);
      console.log(process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN);

      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `${API_URL}/discover/${isMovie ? "movie" : "tv"}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
            },
          }
        );
        setMovies(response.data.results); // Assume results contain the list of movies
        console.log(response.data.results);
      } catch (err) {
        setError("Failed to fetch movie data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [isMovie]);

  return { movies, loading, error };
};

export const useSearch = (query: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const debouncedSearch = debounce((query) => {
    setLoading(true);
    setError("");

    axios
      .get(`${API_URL}/search/movie`, {
        params: { query },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
        },
      })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch search data. Please try again.");
        console.error(err);
        setLoading(false);
      });
  }, 500);

  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }
  }, [query]);

  return { data, loading, error };
};

export const useMovieId = (id: string) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `${API_URL}/movie/${id}`,
          {
            params: { language: "en-US" },
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_BEARER_TOKEN}`,
            },
          }
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch movie details. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovieDetails();
  }, [id]);

  return { movie, loading, error };
};
