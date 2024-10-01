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
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { patientList } from "@/lib/data";
import PatientStatusTag from "../badge/PatientStatusTag";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";

function QueueTable() {
  const [data, setData] = useState<typeof patientList>(patientList);
  const [checked, setChecked] = useState("");

  return (
    <>
      <Table>
        <TableHeader className="[&_tr]:bg-muted/50">
          <TableRow>
            <TableHead className="w-[10rem]">Queue No.</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell># {item.id}</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default QueueTable;
