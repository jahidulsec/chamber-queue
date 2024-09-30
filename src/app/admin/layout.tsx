import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-muted relative md:flex">
      <header className="h-full sticky top-0 md:min-w-[15rem]">
        <Navbar />
        <Sidebar />
      </header>
      <main className="bg-background p-5 m-2 rounded-lg shadow-md md:w-full">{children}</main>
    </div>
  );
}
