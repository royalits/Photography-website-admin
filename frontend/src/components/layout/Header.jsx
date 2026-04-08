import { Menu, Bell } from "lucide-react";

const Header = ({ setSidebarOpen, setMobileOpen }) => {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-5 border-b border-white/10 bg-[#1A1333]">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        
        {/* Mobile Menu */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden"
        >
          <Menu />
        </button>

        {/* Desktop Toggle */}
        <button
          onClick={() => setSidebarOpen(prev => !prev)}
          className="hidden md:block"
        >
          <Menu />
        </button>

        <h2 className="text-lg font-semibold hidden md:block">
          Dashboard
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block bg-white/5 border border-white/10 rounded-lg px-4 py-1.5 text-sm outline-none"
        />

        {/* Notification */}
        <div className="relative">
          <Bell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </div>

        {/* Profile */}
        <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center">
          A
        </div>
      </div>
    </header>
  );
};

export default Header;