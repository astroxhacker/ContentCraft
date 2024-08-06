import React from "react";
import { Sidebar } from "./_components/sidebar";
// import { Sidebar } from "./_components/sidebar";
import { AIUsage } from "./_components/ai-usage";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-gray-50 h-screen">
      <div className=" h-[100vh] md:w-64 hidden md:block fixed bg-secondary">
        <Sidebar />
        <AIUsage />
      </div>
      <div className="md:ml-64 bg-gray-50 h-fit pb-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;