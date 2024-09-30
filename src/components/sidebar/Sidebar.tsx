import SidebarContent from "./SidebarContent";


export default function Sidebar() {
  return (
    <aside className="w-full min-h-screen bg-muted p-4 hidden md:flex flex-col justify-between ">
      <SidebarContent />
    </aside>
  );
}
