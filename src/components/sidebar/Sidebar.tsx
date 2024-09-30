import { ClipboardPenLine } from "lucide-react";
import React from "react";
import Logo from "../logo/Logo";

export default function Sidebar() {
  return (
    <aside className="w-full min-h-screen bg-muted p-4">
      {/* top */}
      <section className="top">
        {/* logo */}
        <Logo />
      </section>

      {/* bottom */}
      <section className="bottom"></section>
    </aside>
  );
}
