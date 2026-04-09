// SearchDropdown.jsx
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Check } from "lucide-react";

export default function SearchDropdown({ label, options, value, onChange, placeholder = "Select..." }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  const filtered = options.filter((o) => o.toLowerCase().includes(search.toLowerCase()));

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
        <span className={value ? "text-white" : "text-white/40"}>{value || placeholder}</span>
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
              placeholder="Search..."
              className="bg-transparent outline-none text-white text-sm w-full placeholder:text-white/30"
            />
          </div>
          <div className="max-h-44 overflow-y-auto scrollbar-hide p-1">
            {filtered.length ? filtered.map((item) => (
              <div
                key={item}
                onClick={() => { onChange(item); setOpen(false); }}
                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm ${
                  value === item ? "bg-purple-600 text-white" : "text-white/70 hover:bg-white/10"
                }`}
              >
                {item}
                {value === item && <Check size={14} />}
              </div>
            )) : (
              <p className="text-white/30 text-sm text-center py-3">No results</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
