import { Bell, Menu, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const titles = {
  "/dashboard": "Dashboard",
  "/professionals": "Professionals",
  "/services": "Services",
  "/customers": "Customers",
  "/bookings": "Bookings",
  "/payments": "Payments",
  "/support": "Support",
  "/reports": "Reports",
  "/content": "Content",
  "/settings": "Settings",
};

const Header = ({ setSidebarOpen, setMobileOpen }) => {
  const { pathname } = useLocation();
  const activeTitle =
    Object.keys(titles).find((route) => pathname.startsWith(route)) ?? "/dashboard";

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#12052d]/70 px-4 py-4 backdrop-blur-xl md:px-6">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/75 transition duration-300 hover:scale-[1.02] hover:border-purple-400/40 hover:text-white md:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={18} />
          </button>

          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="hidden h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/75 transition duration-300 hover:scale-[1.02] hover:border-purple-400/40 hover:text-white md:grid"
            aria-label="Toggle sidebar width"
          >
            <Menu size={18} />
          </button>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-white/45">Admin</p>
            <h2 className="font-display text-lg font-semibold text-white">
              {titles[activeTitle]}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <label className="focus-ring hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/65 transition-all duration-300 md:flex md:min-w-[260px]">
            <Search size={16} className="text-white/45" />
            <input
              type="text"
              placeholder="Search users, bookings, services..."
              className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
          </label>

          <button
            className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/40 hover:text-white"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <motion.span
              animate={{ scale: [1, 1.18, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
              className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-1 text-[10px] font-semibold text-white shadow-[0_0_16px_rgba(236,72,153,0.45)]"
            >
              3
            </motion.span>
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-sm font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.36)] transition-all duration-300 hover:scale-105"
            aria-label="Profile"
          >
            A
          </button>
        </div>
      </div>

    </header>
  );
};
export default Header;
