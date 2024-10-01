import Header from "@/components/queue/Header";
import QueueTable from "@/components/queue/QueueTable";
import Section from "@/components/section/Section";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import PagePagination from "@/components/ui/PagePagination";
import React, { Suspense } from "react";

export default async function QueuePage() {
  return (
    <>
      <Header />

      <Section>
        <Suspense fallback={<TableSkeleton />}>
          <DataTable />
        </Suspense>
      </Section>
    </>
  );
}

const DataTable = async () => {
  return (
    <>
      <QueueTable />
      <PagePagination limit={20} count={50} />
    </>
  );
};
