"use client";

import React, { useState } from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { patientList } from "@/lib/data";
import PatientStatusTag from "../../badge/PatientStatusTag";
import { Users2 } from "lucide-react";
import { Reorder } from "framer-motion";
import PageHeading from "../../heading/PageHeading";
import styles from './style.module.css';

function DisplayTable() {
  const [data, setData] = useState(patientList);

  return (
    <section className="w-3/4 p-4">
      <div className="rounded-3xl p-5 2xl:p-[2vw] bg-background h-full">
        <PageHeading title="Patient List" className={`mb-[2vw] ${styles.h1}`} icon={<Users2 className="size-[1.5vw]"/>} />
        <Table className={styles.table}>
          <TableHeader className="[&_tr]:bg-muted/50">
            <TableRow>
              <TableHead className="w-[15vw]">Queue No.</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <Reorder.Group
            className="[&_tr:last-child]:border-0"
            as="tbody"
            values={data}
            onReorder={setData}
          >
            {data.filter(patient => {
              return (patient.status != 'absent') && (patient.status != 'done')
            }).map((item, index) => (
              <Reorder.Item
                as="tr"
                className="border-b"
                value={item}
                key={item.id}
              >
                <TableCell># {index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <PatientStatusTag status={item.status} />
                </TableCell>

                
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </Table>
      </div>
    </section>
  );
}

export default DisplayTable;
