"use client";

import PatientStatusTag from "@/components/badge/PatientStatusTag";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";

export type Queue = {
  id: number;
  name: string;
  status: string;
  date: Date;
};

export const columns: ColumnDef<Queue>[] = [
  {
    accessorKey: "id",
    header: "Queue No.",
  },
  {
    accessorKey: "name",
    header: "Patient Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <PatientStatusTag status={row.getValue("status")} />;
    },
  },
  {
    id: "actions",
    cell: () => {
      const [checked, setChecked] = useState("");

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mark as</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={checked === "present"}
                onCheckedChange={() => {
                  setChecked("present");
                }}
              >
                Present
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={checked === "in-session"}
                onCheckedChange={() => {
                  setChecked("in-session");
                }}
              >
                In Session
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
