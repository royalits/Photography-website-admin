import {
  LayoutDashboard,
  Users,
  User,
  Calendar,
  Briefcase,
  DollarSign,
  AlertCircle,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Professionals", icon: Users, path: "/professionals" },
  { name: "Customers", icon: User, path: "/customers" },
  { name: "Bookings", icon: Calendar, path: "/bookings" },
  { name: "Services", icon: Briefcase, path: "/services" },
  { name: "Payments", icon: DollarSign, path: "/payments" },
  { name: "Support", icon: AlertCircle, path: "/support" },
  { name: "Reports", icon: BarChart3, path: "/reports" },
  { name: "Content", icon: FileText, path: "/content" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

const cx = (...classes) => classes.filter(Boolean).join(" ");

const Sidebar = ({ sidebarOpen, mobileOpen, setMobileOpen }) => {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#05010f]/80 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static z-50 h-full bg-gradient-to-b from-[#1A1333] to-[#0F0A1F]
          w-72 border-r border-white/10 backdrop-blur-2xl transition-all duration-300
          ${sidebarOpen ? "md:w-72" : "md:w-24"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex h-full flex-col px-3 py-4">
          <div className="mb-5 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.35)]">
                CN
              </div>
              {sidebarOpen && (
                <div className="min-w-0">
                  <h1 className="truncate font-display text-lg font-semibold text-white">
                    ClickNow
                  </h1>
                  <p className="text-xs tracking-wide text-white/50">Admin Console</p>
                </div>
              )}
            </div>
          </div>

          <nav className="flex-1 space-y-2 overflow-y-auto premium-scrollbar pr-1">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block"
                >
                  {({ isActive }) => (
                    <motion.div
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                      className={cx(
                        "group flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-300",
                        isActive
                          ? "border-purple-500/30 bg-gradient-to-r from-purple-600/30 to-pink-500/20 text-white shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                          : "border-transparent text-white/65 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                      )}
                    >
                      <span
                        className={cx(
                          "flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-300",
                          isActive
                            ? "border-purple-400/40 bg-purple-500/25 text-purple-100"
                            : "border-white/10 bg-white/[0.05] text-white/70 group-hover:border-purple-400/30 group-hover:text-white"
                        )}
                      >
                        <Icon
                          size={18}
                          className="transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                        />
                      </span>

                      {sidebarOpen && (
                        <span className="truncate text-sm font-medium">{item.name}</span>
                      )}
                    </motion.div>
                  )}
                </NavLink>
              );
            })}
          </nav>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-sm font-semibold shadow-[0_0_24px_rgba(236,72,153,0.28)]">
                A
              </div>

              {sidebarOpen && (
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">Admin</p>
                  <p className="truncate text-xs text-white/50">admin@email.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
