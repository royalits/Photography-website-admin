import {
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  UserCheck,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Card from "../components/ui/Card";

const stats = [
  {
    title: "Total Professionals",
    value: 127,
    icon: Users,
    color: "from-purple-600 to-fuchsia-500",
    trend: "+12%",
  },
  {
    title: "Pending Approvals",
    value: 8,
    icon: Clock,
    color: "from-amber-500 to-orange-500",
    trend: "+4%",
  },
  {
    title: "Total Customers",
    value: 127,
    icon: UserCheck,
    color: "from-indigo-500 to-cyan-500",
    trend: "+9%",
  },
  {
    title: "Active Bookings",
    value: 8,
    icon: Calendar,
    color: "from-emerald-500 to-teal-500",
    trend: "+6%",
  },
  {
    title: "Monthly Revenue",
    value: 127,
    icon: DollarSign,
    color: "from-violet-500 to-purple-500",
    trend: "+14%",
  },
  {
    title: "Pending Payout",
    value: 8,
    icon: Wallet,
    color: "from-rose-500 to-pink-500",
    trend: "+2%",
  },
];

const bookings = [
  {
    title: "Completed Booking",
    value: 127,
    icon: CheckCircle,
    color: "from-purple-600 to-fuchsia-500",
    trend: "+8%",
  },
  {
    title: "In-Progress Booking",
    value: 8,
    icon: Clock,
    color: "from-amber-500 to-orange-500",
    trend: "+5%",
  },
  {
    title: "Canceled Booking",
    value: 127,
    icon: XCircle,
    color: "from-rose-500 to-red-500",
    trend: "-3%",
  },
  {
    title: "Confirmed Booking",
    value: 8,
    icon: Calendar,
    color: "from-emerald-500 to-green-500",
    trend: "+11%",
  },
];

const monthlyOverview = [
  { month: "Jan", rev: 60, pay: 40 },
  { month: "Feb", rev: 80, pay: 65 },
  { month: "Mar", rev: 75, pay: 20 },
  { month: "Apr", rev: 78, pay: 25 },
  { month: "May", rev: 70, pay: 65 },
  { month: "Jun", rev: 35, pay: 20 },
];

const MetricCard = ({ item, index }) => {
  const Icon = item.icon;
  const trendColor = item.trend.startsWith("-") ? "text-rose-300" : "text-emerald-300";

  return (
    <Card interactive delay={index * 0.06} className="rounded-3xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-white/60">{item.title}</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">{item.value}</h3>

          <p className={`mt-3 flex items-center gap-1 text-xs ${trendColor}`}>
            <ArrowUpRight size={14} className="opacity-90" />
            {item.trend}
            <span className="text-white/45">vs last month</span>
          </p>
        </div>

        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-[0_0_24px_rgba(124,58,237,0.35)]`}
        >
          <Icon size={20} className="text-white" />
        </div>
      </div>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-8 pb-2"
    >
      <section className="space-y-1">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">Overview</p>
        <h1 className="font-display text-3xl font-semibold text-white md:text-4xl">
          Admin Dashboard
        </h1>
        <p className="text-sm text-white/60">Overview of your booking performance</p>
      </section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((item, index) => (
          <MetricCard key={item.title} item={item} index={index} />
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-white">
            Booking Status Distribution
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {bookings.map((item, index) => (
            <MetricCard key={item.title} item={item} index={index + 2} />
          ))}
        </div>
      </section>

      <Card className="rounded-3xl p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-xl font-semibold text-white">Monthly Overview</h2>
            <p className="mt-1 text-sm text-white/55">Revenue and payout movement over time</p>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <div className="flex items-center gap-2 text-white/70">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              Revenue
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
              Payout
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-6 gap-5 md:gap-6">
          {monthlyOverview.map((data, index) => (
            <div key={data.month} className="flex flex-col items-center gap-3">
              <div className="flex h-52 items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-2 py-3">
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.65, delay: index * 0.07, ease: "easeOut" }}
                  style={{ height: `${data.rev}%`, transformOrigin: "bottom" }}
                  className="w-3 rounded-full bg-gradient-to-t from-purple-600 via-violet-500 to-pink-400"
                />
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.65, delay: 0.1 + index * 0.07, ease: "easeOut" }}
                  style={{ height: `${data.pay}%`, transformOrigin: "bottom" }}
                  className="w-3 rounded-full bg-gradient-to-t from-cyan-500 to-blue-400"
                />
              </div>
              <span className="text-xs font-medium tracking-wide text-white/55">{data.month}</span>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default Dashboard;
