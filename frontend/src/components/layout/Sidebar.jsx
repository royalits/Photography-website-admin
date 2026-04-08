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

import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
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

const Sidebar = ({ sidebarOpen, mobileOpen, setMobileOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static z-50 h-full bg-gradient-to-b from-[#1A1333] to-[#0F0A1F]
        transition-all duration-300
        ${sidebarOpen ? "w-64" : "w-20"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <div className="bg-white text-black rounded-md w-10 h-10 flex items-center justify-center font-bold">
            CN
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="text-lg font-semibold">ClickNow</h1>
              <p className="text-xs text-gray-400">Admins</p>
            </div>
          )}
        </div>

        {/* Menu */}
        <nav className="mt-4 space-y-2 px-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition
                  ${
                    isActive
                      ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                      : "hover:bg-white/10 text-gray-300"
                  }`
                }
              >
                <Icon size={20} />

                {sidebarOpen && (
                  <span className="text-sm">{item.name}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom User */}
        <div className="absolute bottom-4 w-full px-3">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
              A
            </div>

            {sidebarOpen && (
              <div>
                <p className="text-sm">Admin</p>
                <p className="text-xs text-gray-400">
                  admin@email.com
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;