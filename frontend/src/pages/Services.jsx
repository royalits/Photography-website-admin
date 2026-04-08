import { Plus, Pencil } from "lucide-react";

const services = [
  {
    title: "Photography",
    status: "Active",
    price: "₹15,000",
    desc: "Professional photography services for weddings and events",
    inclusions: ["2 Photographers", "8 Hours Coverage", "Digital Album"],
    addons: 3,
  },
  {
    title: "Videography",
    status: "Active",
    price: "₹25,000",
    desc: "Cinematic video coverage for your special moments",
    inclusions: ["2 Videographers", "8 Hours Coverage", "Highlight Video"],
    addons: 4,
  },
  {
    title: "Makeup Artist",
    status: "Active",
    price: "₹8,000",
    desc: "Professional bridal and party makeup",
    inclusions: ["Bridal Makeup", "Hair Styling", "Draping"],
    addons: 2,
  },
  {
    title: "Decoration",
    status: "Active",
    price: "₹50,000",
    desc: "Beautiful event decoration and stage setup",
    inclusions: ["Stage Decoration", "Entry Gate", "Table Setup"],
    addons: 5,
  },
  {
    title: "Catering",
    status: "Active",
    price: "₹750",
    desc: "Delicious multi-cuisine catering",
    inclusions: ["Welcome Drinks", "4 Course Meal", "Live Counters"],
    addons: 6,
  },
  {
    title: "DJ & Entertainment",
    status: "Inactive",
    price: "₹35,000",
    desc: "Professional DJ and entertainment services",
    inclusions: ["DJ", "Sound System", "6 Hours"],
    addons: 3,
  },
];

const Services = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Services</h1>
          <p className="text-sm text-gray-400">
            Manage booking services and pricing
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:scale-[1.02] transition">
          <Plus size={16} />
          Add New Service
        </button>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((service, i) => (
          <div
            key={i}
            className="bg-[#1A1333] border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition relative"
          >

            {/* Edit Icon */}
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <Pencil size={16} />
            </button>

            {/* Title + Status */}
            <h2 className="text-lg font-semibold">{service.title}</h2>

            <span
              className={`inline-block mt-2 px-2 py-1 text-xs rounded-full
                ${
                  service.status === "Active"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
            >
              {service.status}
            </span>

            {/* Description */}
            <p className="text-sm text-gray-400 mt-3">
              {service.desc}
            </p>

            {/* Price */}
            <p className="mt-4 text-sm text-gray-400">Base Price</p>
            <h3 className="text-xl font-semibold text-purple-400">
              {service.price}
            </h3>

            {/* Inclusions */}
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-1">Inclusions</p>
              <ul className="text-sm space-y-1">
                {service.inclusions.map((item, idx) => (
                  <li key={idx} className="text-gray-300">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-gray-400">
              {service.addons} Add-ons available
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;