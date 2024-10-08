"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { patientList } from "@/lib/data";
import PatientStatusTag from "../badge/PatientStatusTag";
import { Button } from "../ui/button";
import { GripHorizontal, MoreHorizontal } from "lucide-react";
import { Reorder } from "framer-motion";

function QueueTable() {
  const [data, setData] = useState(patientList);
  const [checked, setChecked] = useState("");

  return (
    <>
      <Table>
        <TableHeader className="[&_tr]:bg-muted/50">
          <TableRow>
            <TableHead className="w-[2rem]">
              <span className="sr-only">Drag icon</span>
            </TableHead>
            <TableHead className="w-[10rem]">Queue No.</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <Reorder.Group className="[&_tr:last-child]:border-0" as="tbody" values={data} onReorder={setData}>
          {data.map((item, index) => (
            <Reorder.Item as="tr" className="border-b" value={item} key={item.id}>
              <TableCell className="cursor-move">
                <GripHorizontal className="size-4" />
              </TableCell>
              <TableCell># {index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <PatientStatusTag status={item.status} />
              </TableCell>

              {/* buttons */}
              <TableCell className="flex gap-1 justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Mark as</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={checked === "present"}
                      onCheckedChange={() => setChecked("present")}
                    >
                      Present
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={checked === "in-session"}
                      onCheckedChange={() => setChecked("in-session")}
                    >
                      In Session
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Table>
    </>
  );
}

export default QueueTable;
