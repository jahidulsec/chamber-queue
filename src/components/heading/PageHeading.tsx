import { cn } from "@/lib/utils";
import React from "react";

type PageHeadingProps = {
    title: string;
    icon: React.ReactNode,
    className?: string
}

function PageHeading({className, icon, title}: PageHeadingProps) {
  return (
    <h1 className={cn("text-2xl font-semibold flex items-center gap-2", className)}>
      <span className="icon text-primary border p-1.5 rounded-full">
        {icon}
      </span>
      <span>{title}</span>
    </h1>
  );
}

export default PageHeading;
