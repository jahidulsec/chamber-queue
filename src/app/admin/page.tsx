import CardSection from "@/components/dashboard/CardSection";
import DataSection from "@/components/dashboard/DataSection";
import Header from "@/components/dashboard/Header";

export default function DashboardHome() {
  return (
    <div className="w-full">
      <Header />

      {/* card section */}
      <CardSection />

      {/* data section */}
      <DataSection />
    </div>
  );
}
