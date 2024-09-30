import { ClipboardPenLine } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="logo flex items-center gap-2">
      <ClipboardPenLine size={32} className="text-primary" />
      <h2 className="flex flex-col">
        <span className="text-xl">Chamber</span>{" "}
        <span className="tracking-[0.65rem] font-light -mt-2 text-sm">Queue</span>
      </h2>
    </div>
  );
}

export default Logo;
