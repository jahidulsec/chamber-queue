import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

function Navbar() {
  return (
    <nav className="md:hidden bg-background flex justify-between items-center gap-5 py-2 px-5 shadow-sm border-b">
      {/* left */}
      <div className="left flex gap-5 items-center">
        <Button size={"icon"} variant={"outline"} className="rounded-full">
          <Menu className=" size-4" />
        </Button>

        <h2>Dashboard</h2>
      </div>

      {/* right */}
      <div className="right opacity-90">
        <Avatar>
          <AvatarImage src="https://cdn-icons-png.flaticon.com/512/219/219988.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}

export default Navbar;
