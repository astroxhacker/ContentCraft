import { Auth } from "@/components/auth";
import { Moon, SearchIcon, Sun } from "lucide-react";
import React from "react";
import { Categories } from "./categories";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Youtube",
    value: "Youtube",
  },
  {
    name: "Instagram",
    value: "Instagram",
  },
  {
    name: "Tiktok",
    value: "Tiktok",
  },
  {
    name: "Linkedin",
    value: "Linkedin",
  },
  {
    name: "Tweet",
    value: "Tweet",
  }, {
    name: "Code",
    value: "Code",
  }, {
    name: "Blog",
    value: "Blog",
  },
];

export const SearchDashboard = ({

  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const { setTheme } = useTheme()
  return (
    <div className="mx-5 py-2">
      <div className="flex  md:flew-row gap-2 mt-5 py-6 px-4 bg-secondary rounded">
        {/* <div className="hidden md:inline flex flex-cols" > */}

        <div className="hidden md:inline flex flex-col gap-2 items-center p-2 border rounded-full bg-secondary w-full md:w-[20%]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
        <div className="hidden md:inline" >

          <Categories items={categories} />
        </div>
        {/* </div> */}
        <div className="inline md:hidden cursor-pointer">

          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href={'/dashboard'}>
                <DropdownMenuItem>
                  Home
                </DropdownMenuItem>
              </Link>
              <Link href={'/dashboard/history'}>
                <DropdownMenuItem>
                  History
                </DropdownMenuItem>
              </Link>
              <Link href={'/dashboard/upgrade'}>
                <DropdownMenuItem>
                  Upgrade
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="ml-auto flex gap-5 items-center justify-center">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>


          <Auth />
        </div>
      </div>
    </div>
  );
};