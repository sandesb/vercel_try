"use client";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import { getImagePath } from "@/hooks/getImagePath";
import { useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  movies: Movie[];
}

const HeroCarousel = ({ movies }: Props) => {
  const router = useRouter();
  const hanldeRoute = (id) => {
    router.push(`/movie/${id}`);
  };
  const autoplay = AutoPlay({
    stopOnMouseEnter: true,
    stopOnInteraction: false,
  });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);

  return (
    <section
      className="p-0 m-0 cursor-pointer overflow-hidden relative -z-0"
      ref={emblaRef}
    >
      <div className="flex bg-red-100 ">
        {movies.map((movie) => (
          <div
            key={movie?.id}
            onClick={() => router.push(`/movie/${movie?.id}`)}
            className="flex-[0_0_100%] min-w-0 relative cursor-pointer"
          >
            <Link
              href={`/movie/${movie?.id}`}
              className="relative z-20 cursor-pointer"
            >
              <Image
                src={getImagePath(movie?.backdrop_path, true)}
                alt={movie?.title}
                width={1920}
                height={1080}
                className=" cursor-pointer w-screen object-cover aspect-auto min-h-[50vh] md:min-h-screen bg-red-100"
              />
            </Link>
            <div className="hidden pointer-events-none lg:inline absolute bottom-0 pt-40 xl:pt-72 left-0 bg-transparent z-20 bg-red-200 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
              <h2 className="text-5xl font-bold max-w-xl">{movie?.title}</h2>
              <p className="max-w-xl line-clamp-3">{movie?.overview}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="absolute -z-10 top-0 pointer-events-none left-0 inset-0 bg-gradient-to-b from-black-100/10 via-gray-900/30 to-black dark:to-[#121212]" /> */}
    </section>
  );
};

export default HeroCarousel;
