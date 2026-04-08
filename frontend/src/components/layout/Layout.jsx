import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#0F0A1F] text-white overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content */}
      <div className="flex flex-col  flex-1">
        <Header
          setSidebarOpen={setSidebarOpen}
          setMobileOpen={setMobileOpen}
        />

        <main className="p-4 md:p-6 overflow-y-auto scrollbar-hide flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;