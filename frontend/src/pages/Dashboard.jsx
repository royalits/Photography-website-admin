import {
  Users,
  UserCheck,
  DollarSign,
  Wallet,
  Calendar,
  XCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

const stats = [
  { title: "Total Professionals", value: 127, icon: Users, color: "from-purple-500 to-indigo-500" },
  { title: "Pending Approvals", value: 8, icon: Clock, color: "from-orange-400 to-orange-600" },
  { title: "Total Customers", value: 127, icon: UserCheck, color: "from-yellow-400 to-yellow-600" },
  { title: "Active Bookings", value: 8, icon: Calendar, color: "from-green-400 to-emerald-600" },
  { title: "Monthly Revenue", value: 127, icon: DollarSign, color: "from-indigo-400 to-indigo-600" },
  { title: "Pending Payout", value: 8, icon: Wallet, color: "from-red-400 to-red-600" },
];

const bookings = [
  { title: "Completed Booking", value: 127, icon: CheckCircle, color: "from-purple-500 to-indigo-500" },
  { title: "In-Progress Booking", value: 8, icon: Clock, color: "from-orange-400 to-orange-600" },
  { title: "Canceled Booking", value: 127, icon: XCircle, color: "from-red-400 to-red-600" },
  { title: "Confirmed Booking", value: 8, icon: Calendar, color: "from-green-400 to-emerald-600" },
];

const Card = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex items-center justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">

      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 hover:opacity-10 transition`} />

      <div>
        <p className="text-xs text-gray-400 tracking-wide">{item.title}</p>
        <h3 className="text-2xl font-semibold mt-1">{item.value}</h3>
        <p className="text-green-400 text-xs mt-1 flex items-center gap-1">
          ↑ 12% <span className="text-gray-400">vs last month</span>
        </p>
      </div>

      <div
        className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}
      >
        <Icon size={20} className="text-white" />
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">
            Overview of your booking performance
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {stats.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>

      {/* Booking Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Booking Status Distribution
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {bookings.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-6">Monthly Overview</h2>

        <div className="h-64 flex items-end justify-between gap-6">
          {[
            { month: "Jan", rev: 60, pay: 40 },
            { month: "Feb", rev: 80, pay: 65 },
            { month: "Mar", rev: 75, pay: 20 },
            { month: "Apr", rev: 78, pay: 25 },
            { month: "May", rev: 70, pay: 65 },
            { month: "Jun", rev: 35, pay: 20 },
          ].map((data, i) => (
            <div key={i} className="flex flex-col items-center gap-3 w-full">
              
              <div className="flex items-end gap-2 h-40">
                <div
                  className="w-3 rounded-full bg-gradient-to-t from-blue-500 to-blue-300"
                  style={{ height: `${data.rev}%` }}
                />
                <div
                  className="w-3 rounded-full bg-gradient-to-t from-green-500 to-green-300"
                  style={{ height: `${data.pay}%` }}
                />
              </div>

              <span className="text-xs text-gray-400">{data.month}</span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex gap-6 mt-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
            Revenue
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            Payout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;