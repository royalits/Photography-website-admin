// CityMultiSelect.jsx
import { useState, useRef, useEffect } from "react";
import { Search, Check, X, ChevronDown } from "lucide-react";

export default function CityMultiSelect({ label, options, selected, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  const filtered = options.filter((o) => o.toLowerCase().includes(search.toLowerCase()));

  const toggle = (city) =>
    onChange(selected.includes(city) ? selected.filter((c) => c !== city) : [...selected, city]);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {label && <label className="block text-white/60 mb-2">{label}</label>}

      <div
        onClick={() => { setOpen(!open); setSearch(""); }}
        className="input flex justify-between items-center cursor-pointer"
      >
        <span className="text-white/50">
          {selected.length ? `${selected.length} city selected` : "Select cities"}
        </span>
        <ChevronDown size={16} className={`text-white/40 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>

      {open && (
        <div className="absolute z-30 mt-1 w-full bg-[#150d2e] border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
            <Search size={14} className="text-white/30" />
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search city..."
              className="bg-transparent outline-none text-white text-sm w-full placeholder:text-white/30"
            />
          </div>

          <div className="max-h-40 overflow-y-auto scrollbar-hide p-1">
            {filtered.length ? filtered.map((city) => (
              <div
                key={city}
                onClick={() => toggle(city)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm ${
                  selected.includes(city) ? "bg-purple-600 text-white" : "text-white/70 hover:bg-white/10"
                }`}
              >
                {city}
                {selected.includes(city) && <Check size={14} />}
              </div>
            )) : (
              <p className="text-white/30 text-sm text-center py-3">No results</p>
            )}
          </div>

          <div className="border-t border-white/10 p-2">
            <button
              onClick={() => setOpen(false)}
              className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition"
            >
              Done ({selected.length} selected)
            </button>
          </div>
        </div>
      )}

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selected.map((city) => (
            <span key={city} className="chip flex items-center gap-1">
              {city}
              <X size={12} className="cursor-pointer" onClick={() => toggle(city)} />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
