import React from "react";
import Section from "../section/Section";
import Search from "../search/Search";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Select, SelectItem, SelectContent, SelectValue, SelectTrigger } from "../ui/select";

function FilterSection() {
  return (
    <Section className="flex justify-between items-center gap-5">
      <Search placeholder="Search by name, queue no." />

      <div className="buttons flex items-center gap-3">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="time">Time</SelectItem>
            <SelectItem value="queue_no">Queue No.</SelectItem>
          </SelectContent>
        </Select>

        <Button className="rounded-full">
          <Plus className="mr-2 size-4" />
          <span>Add</span>
        </Button>
      </div>
    </Section>
  );
}

export default FilterSection;
