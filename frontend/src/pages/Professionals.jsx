import { useState } from "react";
import {
  UserPlus,
  CheckCircle,
  Users,
  UserCheck,
  UserX,
  ArrowRight,
} from "lucide-react";

/* ---------------- OVERVIEW ---------------- */

const overview = [
  {
    title: "Waiting for Approval",
    value: 12,
    icon: UserPlus,
    highlight: true,
    color: "text-yellow-400 border-yellow-500/30",
  },
  {
    title: "Active for Booking",
    value: 60,
    icon: CheckCircle,
    color: "text-blue-400",
  },
  {
    title: "Working on Ground",
    value: 40,
    icon: Users,
    color: "text-purple-400",
  },
  {
    title: "Total Verified",
    value: 127,
    icon: UserCheck,
    color: "text-green-400",
  },
  {
    title: "Suspended",
    value: 40,
    icon: UserX,
    color: "text-red-400",
  },
];

/* ---------------- DATA ---------------- */

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

/* ---------------- TABS ---------------- */

const tabs = ["Pending", "Active", "Working", "Verified", "Suspended"];

const statusStyle = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-500/20 text-yellow-400";
    case "Active":
      return "bg-blue-500/20 text-blue-400";
    case "Working":
      return "bg-purple-500/20 text-purple-400";
    case "Verified":
      return "bg-green-500/20 text-green-400";
    case "Suspended":
      return "bg-red-500/20 text-red-400";
    default:
      return "";
  }
};

/* ---------------- COMPONENT ---------------- */

const Professionals = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  const filteredList = allData.filter(
    (item) => item.status === activeTab
  );

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Professionals</h1>
        <p className="text-gray-400 text-sm">
          Manage & approve professional services
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
        {overview.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 transition hover:scale-[1.02]
              ${item.highlight ? "border-yellow-500/40 bg-yellow-500/5" : ""}
              `}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-white/10 ${item.color}`}>
                  <Icon size={18} />
                </div>
                <p className="text-xs text-gray-400">{item.title}</p>
              </div>

              <h3 className="text-xl font-semibold">{item.value}</h3>
            </div>
          );
        })}
      </div>

      {/* TABS */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm transition
              ${
                activeTab === tab
                  ? "bg-purple-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Section Title */}
      <h2 className="text-lg font-semibold">
        {activeTab} Professionals
      </h2>

      {/* List */}
      <div className="grid md:grid-cols-2 gap-5">
        {filteredList.map((item, i) => (
          <div
            key={i}
            className="group bg-[#1A1333] border border-white/10 rounded-xl p-5 hover:border-purple-500/30 transition"
          >
            {/* Top */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">{item.name}</h3>

              <span
                className={`text-xs px-3 py-1 rounded-full ${statusStyle(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>

            {/* Info */}
            <div className="text-sm text-gray-400 space-y-1">
              <p>ID: {item.id}</p>
              <p>{item.service}</p>
              <p>Experience: {item.exp}</p>
              <p>{item.address}</p>
            </div>

            {/* Action */}
            <div className="mt-4 flex justify-between items-center">
              <button className="text-sm text-purple-400 hover:text-purple-300 transition">
                See Details
              </button>

              <ArrowRight
                size={18}
                className="text-gray-400 group-hover:text-purple-400 transition"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;