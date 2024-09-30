"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ComponentProps } from "react";

type NavlinkProps = ComponentProps<"a"> & {
  icon: React.ReactNode;
  title: string;
};

function NavLink({ className, href, title, icon, ...props }: NavlinkProps) {
  return (
    <Link
      {...props}
      role="button"
      href={href || ""}
      className={cn("px-4 py-2 rounded-full flex gap-3 items-center text-muted-foreground hover:text-background hover:bg-foreground group transition-all duration-500", className)}
    >
      <span className="icon group-hover:text-primary transition-all duration-500">{icon}</span>
      <h4>{title}</h4>
    </Link>
  );
}

export default NavLink;
