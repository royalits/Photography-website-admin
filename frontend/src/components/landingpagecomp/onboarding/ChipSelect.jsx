// ChipSelect.jsx
export default function ChipSelect({ options, selected, setSelected }) {
  const toggle = (item) => {
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => toggle(o)}
          className={`
            px-4 py-2 rounded-full text-sm
            ${selected.includes(o)
              ? "bg-purple-600 text-white"
              : "bg-white/10 text-white/60"}
          `}
        >
          {o}
        </button>
      ))}
    </div>
  );
}