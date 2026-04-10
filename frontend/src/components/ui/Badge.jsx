const cx = (...classes) => classes.filter(Boolean).join(" ");

const variants = {
  pending: "border-yellow-400/40 bg-yellow-500/15 text-yellow-200",
  active: "border-sky-400/40 bg-sky-500/15 text-sky-200",
  working: "border-purple-400/40 bg-purple-500/15 text-purple-200",
  verified: "border-green-400/40 bg-green-500/15 text-green-200",
  suspended: "border-red-400/40 bg-red-500/15 text-red-200",
  success: "border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
  warning: "border-amber-400/40 bg-amber-500/15 text-amber-200",
  danger: "border-rose-400/40 bg-rose-500/15 text-rose-200",
  neutral: "border-white/20 bg-white/10 text-white/75",
};

const Badge = ({ children, variant = "neutral", className = "" }) => (
  <span
    className={cx(
      "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
      variants[variant] ?? variants.neutral,
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
