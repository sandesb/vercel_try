import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const GenreDropDown = async () => {
  

  // const response = await fetch(url, options);
  // const data = (await response.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white  flex items-center text-sm font-medium">
        Genre <ChevronDown className="ml-1" size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* {data?.genres?.map((genre) => ( */}
        <DropdownMenuItem>
          <Link href={"/"}>Romantic</Link>
        </DropdownMenuItem>
        {/* ))} */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropDown;
