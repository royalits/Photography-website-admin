import { motion } from "framer-motion";

const cx = (...classes) => classes.filter(Boolean).join(" ");

const Card = ({ children, className = "", interactive = false, delay = 0 }) => {
  const hoverMotion = interactive
    ? {
        whileHover: { scale: 1.02, y: -2 },
      }
    : {};

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      {...hoverMotion}
      className={cx(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl shadow-[0_0_40px_rgba(124,58,237,0.15)] transition-all duration-300",
        interactive && "hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
};

export default Card;
