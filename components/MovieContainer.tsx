import Link from "next/link";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
import { SkeletonLoader } from "./SkeletonLoader";
import { Button } from "./ui/button";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
  isLoading?: boolean;
  setIsMovie?: (value: boolean) => boolean;
};

const MovieContainer = ({
  title,
  movies,
  isVertical,
  isLoading,
  setIsMovie,
}: Props) => {
  return (
    <div className="">
      <div className=" w-full sm:px-10 px-5 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
        <h2 className="text-lg uppercase font-medium tracking-wider">
          {title}
        </h2>

        {/* <div>
          <Button asChild>
            <Link
              href=""
              className="bg-gray-800 text-md text-white uppercase px-2 py-1 w-[10ch] rounded-md border-indigo-600 font-semibold hover:bg-black duration-300"
            >
              {" "}
              Movie{" "}
            </Link>
          </Button>

          <Button>
            <Link
              href=""
              className="bg-gray-800 text-md text-white uppercase px-2 py-1 w-[10ch] rounded-md border-indigo-600 font-semibold hover:bg-black duration-300"
              onClick={() => setIsMovie(false)}
            >
              TV
            </Link>
          </Button>
        </div> */}

        <span className="w-16 h-1 inline-block absolute left-0 -bottom-[1.5px] z-10" />
      </div>
      <div
        className={cn(
          "grid lg:grid-cols-7 md:grid-cols-5 grid-cols-2 gap-4 px-5 lg:px-10 py-5",
          isVertical && "bg-red-200 flex-col space-x-0 space-y-12"
        )}
      >
        {isLoading ? (
          <div
            className={cn(
              isVertical &&
                "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
            )}
          >
            <SkeletonLoader />
          </div>
        ) : (
          movies?.map((movie) =>
            isVertical ? (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl">
                  <hr className="mb-3" />
                  <p>{movie?.overview}</p>
                </div>
              </div>
            ) : (
              <MovieCard key={movie?.id} movie={movie} />
            )
          )
        )}
      </div>
    </div>
  );
};

export default MovieContainer;
