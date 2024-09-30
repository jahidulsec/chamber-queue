import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { ReactNode } from "react";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen relative flex gap-5">
      <header className="h-full sticky top-0 md:min-w-[15rem]">
        <Navbar />
        <Sidebar />
      </header>
      <main>{children}</main>
    </div>
  );
}
