import React from "react";
import PageHeading from "../heading/PageHeading";
import { Rows3, TvMinimal } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
  return (
    <section className="flex justify-between items-center gap-5 flex-wrap">
      <PageHeading
        icon={<Rows3 className="size-4" />}
        title="Queue Management"
      />
      <Button className="rounded-full" asChild>
        <Link href={'/display/queue'}>
          <TvMinimal className="size-4 mr-2" />
          Display
        </Link>
      </Button>
    </section>
  );
}

export default Header;
