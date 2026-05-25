import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, SlidersHorizontal, UserCheck, UserPlus, Users, UserX, X } from "lucide-react";
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
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452001",
    status: "Pending",
  },
  {
    name: "Amit Sharma",
    id: "PRO00125",
    service: "Photography",
    exp: "5 years",
    city: "Delhi",
    state: "Delhi",
    pincode: "110001",
    status: "Active",
  },
  {
    name: "Rohit Verma",
    id: "PRO00126",
    service: "Videography",
    exp: "3 years",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    status: "Working",
  },
  {
    name: "Anjali Singh",
    id: "PRO00127",
    service: "Makeup Artist",
    exp: "6 years",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560001",
    status: "Verified",
  },
  {
    name: "Raj Mehta",
    id: "PRO00128",
    service: "Photography",
    exp: "2 years",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411001",
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

const defaultFilters = {
  service: "",
  status: "",
  state: "",
  city: "",
  pincode: "",
};

const Professionals = () => {
  const [activeTab, setActiveTab] = useState("Pending");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);
  const [draftFilters, setDraftFilters] = useState(defaultFilters);

  const serviceOptions = useMemo(
    () => [...new Set(allData.map((item) => item.service))],
    []
  );
  const stateOptions = useMemo(
    () => [...new Set(allData.map((item) => item.state))],
    []
  );

  const cityOptions = useMemo(() => {
    const source = draftFilters.state
      ? allData.filter((item) => item.state === draftFilters.state)
      : allData;

    return [...new Set(source.map((item) => item.city))];
  }, [draftFilters.state]);

  const filteredList = useMemo(() => {
    const activeStatus = filters.status || activeTab;

    return allData.filter((item) => {
      if (item.status !== activeStatus) return false;
      if (filters.service && item.service !== filters.service) return false;
      if (filters.state && item.state !== filters.state) return false;
      if (filters.city && item.city !== filters.city) return false;
      if (
        filters.pincode &&
        !item.pincode.toLowerCase().includes(filters.pincode.toLowerCase().trim())
      ) {
        return false;
      }
      return true;
    });
  }, [activeTab, filters]);

  const hasAppliedFilters = Object.values(filters).some(Boolean);
  const activeStatusLabel = filters.status || activeTab;

  const applyFilters = () => {
    setFilters(draftFilters);
    if (draftFilters.status) {
      setActiveTab(draftFilters.status);
    }
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
    setDraftFilters(defaultFilters);
  };

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
              onClick={() => {
                setActiveTab(tab);
                setFilters((prev) => ({ ...prev, status: "" }));
                setDraftFilters((prev) => ({ ...prev, status: "" }));
              }}
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
          <h2 className="font-display text-xl font-semibold text-white">
            {activeStatusLabel} Professionals
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowFilters((prev) => !prev)}
              className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                showFilters || hasAppliedFilters
                  ? "border-purple-400/35 bg-gradient-to-r from-purple-600/35 to-pink-500/25 text-white shadow-[0_0_20px_rgba(124,58,237,0.25)]"
                  : "border-white/10 bg-white/[0.04] text-white/70 hover:border-purple-400/30 hover:text-white"
              }`}
            >
              <SlidersHorizontal size={15} />
              Filters
            </button>
            <Badge variant="neutral">{filteredList.length} records</Badge>
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="max-w-xl rounded-2xl border border-white/10 bg-[#0d0524]/95 p-4 shadow-[0_0_36px_rgba(124,58,237,0.24)] backdrop-blur-xl md:p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium text-white/85">Filter Professionals By</p>
                <button
                  onClick={() => setShowFilters(false)}
                  className="rounded-lg border border-transparent p-1 text-white/55 transition hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                  aria-label="Close filters"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-1.5 text-xs uppercase tracking-[0.12em] text-white/45">Services</p>
                  <select
                    value={draftFilters.service}
                    onChange={(event) =>
                      setDraftFilters((prev) => ({ ...prev, service: event.target.value }))
                    }
                    className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white"
                  >
                    <option className="text-black" value="">Select Services</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service} className="bg-[#140430]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="mb-1.5 text-xs uppercase tracking-[0.12em] text-white/45">Status</p>
                  <select
                    value={draftFilters.status}
                    onChange={(event) =>
                      setDraftFilters((prev) => ({ ...prev, status: event.target.value }))
                    }
                    className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white"
                  >
                    <option value="">Select Status</option>
                    {tabs.map((status) => (
                      <option key={status} value={status} className="bg-[#140430]">
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="mb-1.5 text-xs uppercase tracking-[0.12em] text-white/45">State</p>
                  <select
                    value={draftFilters.state}
                    onChange={(event) =>
                      setDraftFilters((prev) => ({
                        ...prev,
                        state: event.target.value,
                        city: "",
                      }))
                    }
                    className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white"
                  >
                    <option value="">Select State</option>
                    {stateOptions.map((state) => (
                      <option key={state} value={state} className="bg-[#140430]">
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <p className="mb-1.5 text-xs uppercase tracking-[0.12em] text-white/45">City</p>
                  <select
                    value={draftFilters.city}
                    onChange={(event) =>
                      setDraftFilters((prev) => ({ ...prev, city: event.target.value }))
                    }
                    className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white"
                  >
                    <option value="">Select City</option>
                    {cityOptions.map((city) => (
                      <option key={city} value={city} className="bg-[#140430]">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <p className="mb-1.5 text-xs uppercase tracking-[0.12em] text-white/45">PINCODE</p>
                <input
                  type="text"
                  placeholder="Enter PINCODE"
                  value={draftFilters.pincode}
                  onChange={(event) =>
                    setDraftFilters((prev) => ({ ...prev, pincode: event.target.value }))
                  }
                  className="focus-ring w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white placeholder:text-white/35"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button onClick={applyFilters} className="btn-primary w-full justify-center">
                  Apply Filters
                </button>
                <button onClick={clearFilters} className="btn-secondary w-full justify-center">
                  Clear
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${JSON.stringify(filters)}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Table
              columns={columns}
              data={filteredList}
              rowKey={(row) => row.id}
              emptyMessage={`No ${activeStatusLabel.toLowerCase()} professionals found.`}
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
                  <td className="px-5 py-4 text-white/55">
                    {item.city}, {item.state}
                  </td>
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
