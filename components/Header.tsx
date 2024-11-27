import Image from "next/image";
import Link from "next/link";

import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between backdrop-blur-2xl transition-colors p-5 bg-[#12121280] fixed z-50 top-0">
      <div className="flex px-4 items-center w-full mx-auto justify-between">
        {/* Logo */}
        <Link
          href={"/"}
          className="bg-blue-500 p-1 md:px-4 md:py-2 font-bold rounded-md uppercase"
        >
          {/* <Image
          src=""
          alt="Logo"
          width={120}
          height={100}
          priority={true}
          className="cursor-pointer w-40 h-auto"
        /> */}
          BitMovies
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-4 lg:gap-12">
            <li>Home</li>
            <li>Country</li>
            <li>Movies</li>
            <li>TV Shows</li>
          </ul>
        </nav>
        {/* Others */}
        <div className="text-white flex space-x-2 items-center">
          {/* Genre */}
          {/* Search */}
          <SearchInput />
          {/* Theme */}
          {/* <ThemeToggler /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
