import { motion } from "framer-motion";
import { Pencil, Plus } from "lucide-react";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

const services = [
  {
    title: "Photography",
    status: "Active",
    price: "Rs 15,000",
    desc: "Professional photography services for weddings and events",
    inclusions: ["2 Photographers", "8 Hours Coverage", "Digital Album"],
    addons: 3,
  },
  {
    title: "Videography",
    status: "Active",
    price: "Rs 25,000",
    desc: "Cinematic video coverage for your special moments",
    inclusions: ["2 Videographers", "8 Hours Coverage", "Highlight Video"],
    addons: 4,
  },
  {
    title: "Makeup Artist",
    status: "Active",
    price: "Rs 8,000",
    desc: "Professional bridal and party makeup",
    inclusions: ["Bridal Makeup", "Hair Styling", "Draping"],
    addons: 2,
  },
  {
    title: "Decoration",
    status: "Active",
    price: "Rs 50,000",
    desc: "Beautiful event decoration and stage setup",
    inclusions: ["Stage Decoration", "Entry Gate", "Table Setup"],
    addons: 5,
  },
  {
    title: "Catering",
    status: "Active",
    price: "Rs 750",
    desc: "Delicious multi-cuisine catering",
    inclusions: ["Welcome Drinks", "4 Course Meal", "Live Counters"],
    addons: 6,
  },
  {
    title: "DJ and Entertainment",
    status: "Inactive",
    price: "Rs 35,000",
    desc: "Professional DJ and entertainment services",
    inclusions: ["DJ", "Sound System", "6 Hours"],
    addons: 3,
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-8 pb-2"
    >
      <section className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Catalog</p>
          <h1 className="font-display text-3xl font-semibold text-white md:text-4xl">Services</h1>
          <p className="mt-1 text-sm text-white/60">Manage booking services and pricing</p>
        </div>

        <button className="btn-primary">
          <Plus size={16} />
          Add New Service
        </button>
      </section>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Card key={service.title} interactive delay={index * 0.05} className="rounded-3xl p-6">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h2 className="font-display text-xl font-semibold text-white">{service.title}</h2>
                <Badge
                  variant={service.status === "Active" ? "success" : "danger"}
                  className="mt-3"
                >
                  {service.status}
                </Badge>
              </div>

              <button className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white/60 transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/35 hover:text-white">
                <Pencil size={15} />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/55">{service.desc}</p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">Base Price</p>
              <h3 className="mt-2 text-2xl font-semibold text-purple-200">{service.price}</h3>
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">Inclusions</p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {service.inclusions.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.14em] text-white/45">
              {service.addons} add-ons available
            </div>
          </Card>
        ))}
      </section>
    </motion.div>
  );
};

export default Services;
