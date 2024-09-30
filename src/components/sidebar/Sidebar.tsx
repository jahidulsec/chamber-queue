import { LayoutDashboard, LogOut } from "lucide-react";
import React from "react";
import Logo from "../logo/Logo";
import NavLink from "../buttons/NavLink";
import { Separator } from "../ui/separator";

export default function Sidebar() {
  return (
    <aside className="w-full min-h-screen bg-muted p-4 flex flex-col justify-between">
      {/* top */}
      <section className="top flex flex-col gap-8">
        {/* logo */}
        <div className="logo px-2">
          <Logo />
        </div>

        <Separator />

        <nav className="flex flex-col gap-1">
          <NavLink
            href="/"
            title="Dashboard"
            icon={<LayoutDashboard className="size-5" />}
          />
          <NavLink
            href="/"
            title="Dashboard"
            icon={<LayoutDashboard className="size-5" />}
          />
        </nav>
      </section>

      {/* bottom */}
      <section className="bottom">
        <Separator />
        <NavLink
          className="mt-5 text-primary"
          title="Logout"
          icon={<LogOut className="size-5" />}
        />
      </section>
    </aside>
  );
}
