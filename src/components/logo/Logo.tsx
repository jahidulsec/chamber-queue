import { ClipboardPenLine } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="logo flex items-center gap-2 2xl:gap-[1vw]">
      <ClipboardPenLine className="text-primary size-[32px] 2xl:size-[3vw]" />
      <h2 className="flex flex-col">
        <span className="text-xl 2xl:text-[2vw]">Chamber</span>{" "}
        <span className="tracking-[0.65rem] 2xl:tracking-[0.95vw] font-light -mt-2 2xl:mt-[1vw] text-sm 2xl:text-[1.5vw]">Queue</span>
      </h2>
    </div>
  );
}

export default Logo;
