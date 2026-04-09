import { useState, useEffect, useRef } from "react";
import Accordion from "./Accordion";
import SearchDropdown from "./SearchDropdown";
import CityMultiSelect from "./CityMultiSelect";
import { X, UploadCloud, FileText } from "lucide-react";

const eventOptions = [
  "Wedding", "Pre-Wedding", "Engagement", "Birthday",
  "Corporate Event", "Product Shoot", "Fashion Shoot", "Real Estate Shoot"
];

const serviceTypes = [
  "Photo and Videography Services", "Wedding Photography", "Portrait Photography",
  "Fashion & Editorial", "Product & Commercial", "Real Estate Photography",
  "Event Coverage", "Drone Videography", "Documentary Filmmaking",
];

const teamSizes = ["Solo (Just me)", "2 Members", "3-5 Members", "6-10 Members", "10+ Members"];

const stateCities = {
  "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Noida"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini", "Saket", "Lajpat Nagar"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
};

function LocationBlock({ index, onSave, onRemove }) {
  const [state, setState] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);

  const handleSave = () => {
    if (state && selectedCities.length) onSave({ state, cities: selectedCities });
  };

  return (
    <div className="border border-white/10 rounded-xl p-4 space-y-3 relative">
      {index > 0 && (
        <button onClick={onRemove} className="absolute top-3 right-3 text-white/40 hover:text-white">
          <X size={14} />
        </button>
      )}

      <SearchDropdown
        label="State"
        options={Object.keys(stateCities)}
        value={state}
        onChange={(v) => { setState(v); setSelectedCities([]); }}
        placeholder="Select state"
      />

      {state && (
        <CityMultiSelect
          label="City"
          options={stateCities[state]}
          selected={selectedCities}
          onChange={setSelectedCities}
        />
      )}

      <button onClick={handleSave} className="btn-light mt-1">Save Location</button>
    </div>
  );
}

// Multi-select dropdown with search for events
function MultiSearchDropdown({ label, options, selected, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  const filtered = options.filter((o) => o.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (item) =>
    onChange(selected.includes(item) ? selected.filter((e) => e !== item) : [...selected, item]);

  return (
    <div className="relative" ref={ref}>
      {label && <label className="label">{label}</label>}
      <div
        onClick={() => { setOpen(!open); setSearch(""); }}
        className="input flex justify-between items-center cursor-pointer"
      >
        <span className="text-white/40">{selected.length ? `${selected.length} selected` : "Select events"}</span>
        <span className={`text-white/40 transition-transform text-xs ${open ? "rotate-180" : ""}`}>▾</span>
      </div>

      {open && (
        <div className="absolute z-30 mt-1 w-full bg-[#150d2e] border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
            <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input autoFocus value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="bg-transparent outline-none text-white text-sm w-full placeholder:text-white/30" />
          </div>
          <div className="max-h-44 overflow-y-auto scrollbar-hide p-1">
            {filtered.map((item) => (
              <div key={item} onClick={() => toggle(item)} className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm mb-1 ${selected.includes(item) ? "bg-purple-600 text-white" : "text-white/70 hover:bg-white/10"}`}>
                {item}
                {selected.includes(item) && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>}
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 p-2">
            <button onClick={() => setOpen(false)} className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition">
              Done ({selected.length} selected)
            </button>
          </div>
        </div>
      )}

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selected.map((item) => (
            <div key={item} className="chip">
              {item}
              <X size={14} onClick={() => toggle(item)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Step5Services({ registerValidate }) {
  const [form, setForm] = useState({
    serviceType: "", events: [], isFullTime: true, teamSize: "",
    cameras: "", lenses: "", lighting: "", drone: "", editing: "",
    hourlyPrice: "", packagePrice: "", urgent: true, travel: false,
    cancellation: false, agreement: false,
  });

  const [blocks, setBlocks] = useState([0]);
  const [savedLocations, setSavedLocations] = useState([]);
  const [passbookFile, setPassbookFile] = useState(null);
  const passbookRef = useRef(null);

  useEffect(() => {
    registerValidate(() => {
      if (!form.serviceType) return "Please select a service type.";
      if (!form.events.length) return "Select at least one event type.";
      if (!form.teamSize) return "Please select your team size.";
      if (!form.cameras.trim()) return "Please enter your camera equipment.";
      if (!form.editing.trim()) return "Please enter your editing software.";
      if (!form.hourlyPrice.trim()) return "Hourly price is required.";
      if (!form.packagePrice.trim()) return "Package price is required.";
      return null;
    });
  }, [form]);

  const handleSaveLocation = (data) => {
    setSavedLocations((prev) => {
      const idx = prev.findIndex((l) => l.state === data.state);
      if (idx >= 0) { const u = [...prev]; u[idx] = data; return u; }
      return [...prev, data];
    });
  };

  const addBlock = () => setBlocks((prev) => [...prev, prev.length]);
  const removeBlock = (i) => setBlocks((prev) => prev.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-6">

      <SearchDropdown label="Service Type" options={serviceTypes} value={form.serviceType} onChange={(v) => setForm({ ...form, serviceType: v })} placeholder="Select service type" />

      <MultiSearchDropdown label="Speciality or Event type" options={eventOptions} selected={form.events} onChange={(v) => setForm({ ...form, events: v })} />

      <div>
        <label className="label">Are you a full-time professional or a freelancer?</label>
        <div className="flex text-white text-lg gap-6">
          <label className="flex gap-2"><input type="radio" checked={form.isFullTime} onChange={() => setForm({ ...form, isFullTime: true })} /> Full-Time</label>
          <label className="flex gap-2"><input type="radio" checked={!form.isFullTime} onChange={() => setForm({ ...form, isFullTime: false })} /> Freelancer</label>
        </div>
      </div>

      <SearchDropdown label="What is your team size?" options={teamSizes} value={form.teamSize} onChange={(v) => setForm({ ...form, teamSize: v })} placeholder="Select team size" />

      {[
        { label: "What camera(s) do you own?", key: "cameras" },
        { label: "What lenses do you own?", key: "lenses" },
        { label: "Do you own lighting equipment?", key: "lighting" },
        { label: "Do you own a drone?", key: "drone" },
        { label: "What editing software do you use?", key: "editing" },
      ].map((item) => (
        <div key={item.key}>
          <label className="label">{item.label}</label>
          <textarea className="input" value={form[item.key]} onChange={(e) => setForm({ ...form, [item.key]: e.target.value })} />
        </div>
      ))}

      <div>
        <label className="label">Hourly Price</label>
        <input className="input" placeholder="Enter hourly price" value={form.hourlyPrice} onChange={(e) => setForm({ ...form, hourlyPrice: e.target.value })} />
      </div>
      <div>
        <label className="label">Package Price</label>
        <input className="input" placeholder="Enter package price" value={form.packagePrice} onChange={(e) => setForm({ ...form, packagePrice: e.target.value })} />
      </div>

      <Toggle label="Available for urgent bookings" value={form.urgent} onChange={(v) => setForm({ ...form, urgent: v })} />
      <Toggle label="Willing to travel outside city" value={form.travel} onChange={(v) => setForm({ ...form, travel: v })} />

      {form.travel && (
        <Accordion title="Secondary Working Location">
          <div className="space-y-4">
            {blocks.map((_, i) => (
              <LocationBlock key={i} index={i} onSave={handleSaveLocation} onRemove={() => removeBlock(i)} />
            ))}
            <button onClick={addBlock} className="btn-light w-full">+ Add More Location</button>
            {savedLocations.length > 0 && (
              <div className="mt-3 space-y-2">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Saved Locations</p>
                {savedLocations.map((loc, i) => (
                  <div key={i} className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-purple-300 text-sm font-medium">{loc.state}</span>
                    <span className="text-white/30">—</span>
                    {loc.cities.map((c) => <span key={c} className="chip text-xs">{c}</span>)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Accordion>
      )}

      <Toggle label="Cancellation Policy" value={form.cancellation} onChange={(v) => setForm({ ...form, cancellation: v })} />
      <Toggle label="Platform Commission Agreement" value={form.agreement} onChange={(v) => setForm({ ...form, agreement: v })} />

      <Accordion title="Bank Information">
        <div className="space-y-4">
          <input className="input" placeholder="Account Number" />
          {!passbookFile ? (
            <div onClick={() => passbookRef.current.click()} className="border border-dashed border-white/20 rounded-xl p-6 text-center bg-white/5 cursor-pointer hover:border-purple-400/40 hover:bg-white/[0.04] transition">
              <UploadCloud size={24} className="mx-auto text-white/30 mb-2" />
              <p className="text-white/60 text-sm">Click to upload passbook</p>
              <p className="text-white/30 text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p>
              <input ref={passbookRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => e.target.files[0] && setPassbookFile(e.target.files[0])} />
            </div>
          ) : (
            <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/10 border border-purple-400/20">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-purple-300" />
                <div>
                  <p className="text-white text-sm truncate max-w-[200px]">{passbookFile.name}</p>
                  <p className="text-white/40 text-xs">{(passbookFile.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button onClick={() => setPassbookFile(null)} className="text-white/40 hover:text-white"><X size={16} /></button>
            </div>
          )}
          <input className="input" placeholder="UPI ID" />
          <input className="input" placeholder="Bank Name" />
          <input className="input" placeholder="Branch Name" />
          <input className="input" placeholder="IFSC Code" />
        </div>
      </Accordion>
    </div>
  );
}

const Toggle = ({ label, value, onChange }) => (
  <div className="flex justify-between items-center">
    <span className="text-white/70">{label}</span>
    <div onClick={() => onChange(!value)} className={`w-12 h-6 rounded-full ${value ? "bg-green-500" : "bg-gray-500"} cursor-pointer`}>
      <div className={`toggle-dot ${value && "on"}`} />
    </div>
  </div>
);
