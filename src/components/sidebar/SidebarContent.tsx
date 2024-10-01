'use client'

import { CalendarCheck2, LayoutDashboard, LogOut, Rows3 } from "lucide-react";
import React from "react";
import Logo from "../logo/Logo";
import NavLink from "../buttons/NavLink";
import { Separator } from "../ui/separator";

function SidebarContent() {
  return (
    <>
        {/* top */}
      <section className="top flex flex-col gap-8">
        {/* logo */}
        <div className="logo px-2">
          <Logo />
        </div>

        <Separator />

        <nav className="flex flex-col gap-3">
          <NavLink
            href="/admin"
            title="Dashboard"
            icon={<LayoutDashboard className="size-4" />}
          />
          <NavLink
            href="/admin/appointments"
            title="Appointment"
            icon={<CalendarCheck2 className="size-4" />}
          />
           <NavLink
            href="/admin/queue"
            title="Queue"
            icon={<Rows3 className="size-4" />}
          />
        </nav>
      </section>

      {/* bottom */}
      <section className="bottom">
        <Separator />
        <NavLink
          className="mt-5 text-primary"
          title="Logout"
          icon={<LogOut className="size-4" />}
        />
      </section>
    </>
  )
}

export default SidebarContent