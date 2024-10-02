import React from "react";
import Section from "../section/Section";
import Search from "../search/Search";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectValue,
  SelectTrigger,
} from "../ui/select";

function FilterSection() {
  return (
    <Section className="flex flex-wrap justify-between items-center gap-5">
      <Search placeholder="Search by name, queue no." />

      <Select>
        <SelectTrigger className="grow md:grow-0 md:w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="time">Time</SelectItem>
          <SelectItem value="queue_no">Queue No.</SelectItem>
        </SelectContent>
      </Select>
    </Section>
  );
}

export default FilterSection;
