import React from "react";
import Section from "../section/Section";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import DataTable from "./DataTable";
import { format } from "date-fns";

function DataSection() {
  return (
    <Section className="bg-muted rounded-3xl">
      <div className="header py-4 px-4 flex justify-between items-center gap-5">
        <div className="">
          <h3 className="text-xl font-semibold">Today&apos;s Appointments</h3>
          <h4 className="text-xs text-muted-foreground">{format(new Date(), 'EEEE, do LLLL, yyyy')}</h4>
        </div>
        <Button className="rounded-full">
          <Plus className="size-4 mr-2" />
          <span>Add</span>
        </Button>
      </div>

      <DataTable />
    </Section>
  );
}

export default DataSection;
