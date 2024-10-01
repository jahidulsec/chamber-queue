import AppointmentTable from "@/components/appointments/AppointmentTable";
import FilterSection from "@/components/appointments/FilterSection";
import Header from "@/components/appointments/Header";
import TableSkeleton from "@/components/skeleton/TableSkeleton";
import PagePagination from "@/components/ui/PagePagination";
import React, { Suspense } from "react";

export default async function AppoinmentPage() {
  return (
    <>
      <Header />
      <FilterSection />

      <Suspense fallback={<TableSkeleton />}>
        <DataTable />
      </Suspense>
    </>
  );
}

const DataTable = async () => {
  return <>
    <AppointmentTable />
    <PagePagination limit={20} count={50} />
    </>;
};
