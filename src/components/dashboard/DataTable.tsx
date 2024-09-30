"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { patientList } from "@/lib/data";
import PatientStatusTag from "../badge/PatientStatusTag";
import Modal from "../modal/Modal";
import AppointmentForm from "../forms/AppointmentForm";
import { UserRoundPlus } from "lucide-react";

function DataTable() {
  const [edit, setEdit] = useState<any>(false);

  return (
    <>
      <section className="bg-background border-2 border-muted my-2 p-4 rounded-3xl min-h-[10rem]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[10rem]">Queue No.</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Status</TableHead>
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
                <TableCell className="flex gap-1 justify-end py-1">
                  <Button
                    className="rounded-full"
                    variant={"link"}
                    onClick={() => {
                      setEdit(item);
                    }}
                  >
                    Change
                  </Button>
                  <Button
                    className="rounded-full text-destructive"
                    variant={"link"}
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* add appointment dialog */}
      <Modal
        open={edit}
        onOpenChange={setEdit}
        title="Add Appointment"
        icon={<UserRoundPlus className="text-primary size-4" />}
      >
        <AppointmentForm
          data={edit}
          onClose={() => {
            setEdit(false);
          }}
        />
      </Modal>
    </>
  );
}

export default DataTable;
