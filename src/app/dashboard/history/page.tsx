import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Button } from "@/components/ui/button";
  import { db } from "@/lib/db";
  import { auth } from "@clerk/nextjs/server";
  import { format } from "date-fns";
import Link from "next/link";
import { Auth } from "@/components/auth";
  
  const History = async () => {
    const { userId } = auth();
  
    const userHistory = await db.aIOutput.findMany({
      where: {
        userId: userId as string,
      },
    });
  
    return (
      <div className="mx-5 py-2">
        <div className=" flex justify-between mt-5 py-6 px-4 bg-secondary rounded">
          <h2 className="font-medium">Output History</h2>
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
        <Auth/>
        </div>
        <div className="mt-5 py-6 px-4 bg-secondary rounded ">
          <Table>
            <TableCaption>A list of your ai output history.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Template</TableHead>
                <TableHead className="w-[250px]">Title</TableHead>
                <TableHead>AI Output</TableHead>
                <TableHead className="text-right">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userHistory && userHistory.length > 0
                ? userHistory.map((history) => (
                    <TableRow key={history.id} className="hover:bg-gray-700" >
                      <TableCell>{history.templateUsed}</TableCell>
                      <TableCell className="w-[250px]">{history.title}</TableCell>
                      <TableCell className="whitespace-pre-wrap">
                        {history.description}
                      </TableCell>
                      <TableCell className="text-right">
                        {format(history.createdAt, "MM/dd/yyyy")}
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };
  
  export default History;