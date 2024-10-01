import { CalendarCheck2 } from "lucide-react";
import React from "react";
import PageHeading from "../heading/PageHeading";

function Header() {
  return (
    <section>
      <PageHeading title="Appointments" icon={<CalendarCheck2 className="size-5" />}/>
    </section>
  );
}

export default Header;
