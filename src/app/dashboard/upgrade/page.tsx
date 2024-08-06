"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Upgrade = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const response = await axios.post("/api/upgrade/checkout");
    router.push(response.data.url);
  };

  return (
    <div className="mx-5 py-2">
      <div className=" flex justify-between mt-5 py-6 px-4 bg-secondary rounded">
        <h2 className="font-medium">Upgrade Credit</h2>
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
      </div>
      <div className="mt-5 py-6 px-4 rounded">
        <Card className="w-[350px] flex flex-col mx-auto">
          <CardHeader>
            <CardTitle>$10 One-Time Purchase</CardTitle>
            <CardDescription>10,000 AI Credit</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <p className="flex my-2 gap-2">
                <Check></Check> 100,000 words/purchase
              </p>
              <p className="flex my-2 gap-2">
                <Check></Check> All Template Access
              </p>
              <p className="flex my-2 gap-2">
                <Check></Check> Retain All History
              </p>
            </div>
            <Button className="mt-5" onClick={handleOnClick}>
              Purchase
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upgrade;