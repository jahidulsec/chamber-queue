"use client";

import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableHeader,
} from "../ui/table";
import { patientList } from "@/lib/data";
import PatientStatusTag from "../badge/PatientStatusTag";
import { Button } from "../ui/button";
import { formatDateTime } from "@/lib/formatter";
import { Check, Edit, X } from "lucide-react";
import Tooltips from "../ui/Tooltips";

function AppointmentTable() {
  const [edit, setEdit] = useState<any>(false);
  const [cancel, setCancel] = useState<any>(false);

  return (
    <>
      <Table>
        <TableHeader className="[&_tr]:bg-muted/50">
          <TableRow>
            <TableHead className="w-[10rem]">Queue No.</TableHead>
            <TableHead>Patient Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Time</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {patientList.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="py-1"># {item.id}</TableCell>
              <TableCell className="py-1">{item.name}</TableCell>
              <TableCell className="py-1">
                <PatientStatusTag status={item.status} />
              </TableCell>
              <TableCell>{formatDateTime(item.date)}</TableCell>

              {/* buttons */}
              <TableCell className="flex gap-1 justify-end">
                <Tooltips title="Mark as present">
                  <Button
                    className="rounded-full text-teal-500"
                    variant={"ghost"}
                    size={"icon"}
                  >
                    <Check className="size-4" />
                  </Button>
                </Tooltips>
                <Tooltips title="Change">
                  <Button
                    className="rounded-full text-primary"
                    variant={"ghost"}
                    size={"icon"}
                    onClick={() => {
                      setEdit(item);
                    }}
                  >
                    <Edit className="size-4" />
                  </Button>
                </Tooltips>

                <Tooltips title="Cancel">
                  <Button
                    className="rounded-full text-destructive hover:bg-destructive hover:text-background"
                    variant={"ghost"}
                    size={"icon"}
                    onClick={() => {
                      setCancel(item.id);
                    }}
                  >
                    <X className="size-4" />
                  </Button>
                </Tooltips>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default AppointmentTable;
