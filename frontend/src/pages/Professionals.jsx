import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, UserCheck, UserPlus, Users, UserX } from "lucide-react";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";
import Table from "../components/ui/Table";

const overview = [
  {
    title: "Waiting for Approval",
    value: 12,
    icon: UserPlus,
    highlight: true,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Active for Booking",
    value: 60,
    icon: CheckCircle,
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Working on Ground",
    value: 40,
    icon: Users,
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Total Verified",
    value: 127,
    icon: UserCheck,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Suspended",
    value: 40,
    icon: UserX,
    color: "from-rose-500 to-red-500",
  },
];

const allData = [
  {
    name: "Tarun Jain",
    id: "PRO00124",
    service: "Photo & Videography",
    exp: "4 years",
    address: "Indore",
    status: "Pending",
  },
  {
    name: "Amit Sharma",
    id: "PRO00125",
    service: "Photography",
    exp: "5 years",
    address: "Delhi",
    status: "Active",
  },
  {
    name: "Rohit Verma",
    id: "PRO00126",
    service: "Videography",
    exp: "3 years",
    address: "Mumbai",
    status: "Working",
  },
  {
    name: "Anjali Singh",
    id: "PRO00127",
    service: "Makeup Artist",
    exp: "6 years",
    address: "Bangalore",
    status: "Verified",
  },
  {
    name: "Raj Mehta",
    id: "PRO00128",
    service: "Photography",
    exp: "2 years",
    address: "Pune",
    status: "Suspended",
  },
];

const tabs = ["Pending", "Active", "Working", "Verified", "Suspended"];

const columns = [
  { key: "name", label: "Name", headerClassName: "min-w-[220px]" },
  { key: "service", label: "Service", headerClassName: "min-w-[180px]" },
  { key: "experience", label: "Experience", headerClassName: "min-w-[120px]" },
  { key: "location", label: "Location", headerClassName: "min-w-[120px]" },
  { key: "status", label: "Status", headerClassName: "min-w-[130px]" },
  { key: "action", label: "Action", headerClassName: "min-w-[130px] text-right" },
];

const statusVariant = {
  Pending: "pending",
  Active: "active",
  Working: "working",
  Verified: "verified",
  Suspended: "suspended",
};

const Professionals = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const filteredList = allData.filter((item) => item.status === activeTab);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-8 pb-2"
    >
      <section className="space-y-1">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Management</p>
        <h1 className="font-display text-3xl font-semibold text-white md:text-4xl">
          Professionals
        </h1>
        <p className="text-sm text-white/60">Manage and approve professional services</p>
      </section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-5">
        {overview.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              interactive
              delay={index * 0.05}
              className={`rounded-3xl p-5 ${
                item.highlight ? "border-amber-400/45 bg-amber-500/[0.08]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-[0_0_18px_rgba(124,58,237,0.3)]`}
                >
                  <Icon size={18} className="text-white" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-white/45">{item.title}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">{item.value}</h3>
                </div>
              </div>
            </Card>
          );
        })}
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "border border-purple-400/35 bg-gradient-to-r from-purple-600/35 to-pink-500/25 text-white shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                  : "border border-transparent bg-white/[0.02] text-white/55 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-xl font-semibold text-white">{activeTab} Professionals</h2>
          <Badge variant="neutral">{filteredList.length} records</Badge>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Table
              columns={columns}
              data={filteredList}
              rowKey={(row) => row.id}
              emptyMessage={`No ${activeTab.toLowerCase()} professionals found.`}
              renderRow={(item) => (
                <>
                  <td className="px-5 py-4">
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-purple-200/80">
                      {item.id}
                    </p>
                  </td>
                  <td className="px-5 py-4 text-white/80">{item.service}</td>
                  <td className="px-5 py-4 text-white/60">{item.exp}</td>
                  <td className="px-5 py-4 text-white/55">{item.address}</td>
                  <td className="px-5 py-4">
                    <Badge variant={statusVariant[item.status]}>{item.status}</Badge>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button className="rounded-lg border border-transparent px-3 py-1.5 text-sm text-purple-200 transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white">
                      See Details
                    </button>
                  </td>
                </>
              )}
            />
          </motion.div>
        </AnimatePresence>
      </section>
    </motion.div>
  );
};

export default Professionals;
