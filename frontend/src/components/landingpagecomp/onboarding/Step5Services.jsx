import { useState } from "react";
import Accordion from "./Accordion";
import { ChevronDown, X } from "lucide-react";

const eventOptions = [
  "Wedding","Pre-Wedding","Engagement","Birthday",
  "Corporate Event","Product Shoot","Fashion Shoot","Real Estate Shoot"
];

const serviceTypes = [
  "Photo and Videography Services",
  "Wedding Photography",
  "Portrait Photography",
  "Fashion & Editorial",
  "Product & Commercial",
  "Real Estate Photography",
  "Event Coverage",
  "Drone Videography",
  "Documentary Filmmaking",
];

const teamSizes = [
  "Solo (Just me)",
  "2 Members",
  "3-5 Members",
  "6-10 Members",
  "10+ Members",
];

export default function Step5Services() {
  const [form, setForm] = useState({
    serviceType: "Photo and Videography Services",
    events: [],
    isFullTime: true,
    teamSize: "1-5 Members",
    cameras: "",
    lenses: "",
    lighting: "",
    drone: "",
    editing: "",
    hourlyPrice: "",
    packagePrice: "",
    urgent: true,
    travel: false,
    cancellation: false,
    agreement: false,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [teamDropdownOpen, setTeamDropdownOpen] = useState(false);

  const [state, setState] = useState("");
  const [cities, setCities] = useState([]);
  const [savedLocations, setSavedLocations] = useState([]);

  const toggleEvent = (item) => {
    setForm((prev) => ({
      ...prev,
      events: prev.events.includes(item)
        ? prev.events.filter((e) => e !== item)
        : [...prev.events, item],
    }));
  };

  const addLocation = () => {
    if (state && cities.length) {
      setSavedLocations([...savedLocations, { state, cities }]);
      setState("");
      setCities([]);
    }
  };

  return (
    <div className="space-y-6">

      {/* SERVICE TYPE */}
      <div className="relative">
        <label className="label">Service Type</label>
        <div
          onClick={() => { setServiceDropdownOpen(!serviceDropdownOpen); setTeamDropdownOpen(false); setDropdownOpen(false); }}
          className="input flex justify-between cursor-pointer"
        >
          {form.serviceType}
          <ChevronDown size={16} />
        </div>
        {serviceDropdownOpen && (
          <div className="absolute z-20 mt-2 w-full bg-[#1c1530] border border-white/10 rounded-xl p-3 max-h-48 overflow-y-auto scrollbar-hide">
            {serviceTypes.map((item) => (
              <div
                key={item}
                onClick={() => { setForm({ ...form, serviceType: item }); setServiceDropdownOpen(false); }}
                className={`px-3 py-2 rounded-lg cursor-pointer text-sm mb-1 ${
                  form.serviceType === item ? "bg-purple-600 text-white" : "hover:bg-white/10 text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MULTI SELECT (FIXED INSIDE BOX) */}
      <div className="relative">
        <label className="label">Speciality or Event type</label>

        <div
          onClick={() => { setDropdownOpen(!dropdownOpen); setServiceDropdownOpen(false); setTeamDropdownOpen(false); }}
          className="input flex justify-between cursor-pointer"
        >
          Select Events
          <ChevronDown size={16} />
        </div>

        {dropdownOpen && (
          <div className="absolute z-20 mt-2 w-full scrollbar-hide bg-[#1c1530] border border-white/10 rounded-xl p-3 max-h-48 overflow-y-auto">
            {eventOptions.map((item) => (
              <div
                key={item}
                onClick={() => toggleEvent(item)}
                className={`px-3 py-2 rounded-lg cursor-pointer text-sm mb-1 ${
                  form.events.includes(item)
                    ? "bg-purple-600 text-white"
                    : "hover:bg-white/10 text-white"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {/* CHIPS */}
        <div className="flex flex-wrap text-white gap-2 mt-3">
          {form.events.map((item) => (
            <div key={item} className="chip">
              {item}
              <X size={14} onClick={() => toggleEvent(item)} />
            </div>
          ))}
        </div>
      </div>

      {/* RADIO */}
      <div>
        <label className="label ">
          Are you a full-time professional or a freelancer?
        </label>
        <div className="flex text-white text-lg gap-6">
          <label className="flex gap-2">
            <input type="radio" checked={form.isFullTime}
              onChange={() => setForm({...form, isFullTime:true})}/>
            Full-Time
          </label>
          <label className="flex gap-2">
            <input type="radio" checked={!form.isFullTime}
              onChange={() => setForm({...form, isFullTime:false})}/>
            Freelancer
          </label>
        </div>
      </div>

      {/* TEAM SIZE */}
      <div className="relative">
        <label className="label">What is your team size?</label>
        <div
          onClick={() => { setTeamDropdownOpen(!teamDropdownOpen); setServiceDropdownOpen(false); setDropdownOpen(false); }}
          className="input flex justify-between cursor-pointer"
        >
          {form.teamSize}
          <ChevronDown size={16} />
        </div>
        {teamDropdownOpen && (
          <div className="absolute z-20 mt-2 w-full bg-[#1c1530] border border-white/10 rounded-xl p-3 max-h-48 overflow-y-auto scrollbar-hide">
            {teamSizes.map((item) => (
              <div
                key={item}
                onClick={() => { setForm({ ...form, teamSize: item }); setTeamDropdownOpen(false); }}
                className={`px-3 py-2 rounded-lg cursor-pointer text-sm mb-1 ${
                  form.teamSize === item ? "bg-purple-600 text-white" : "hover:bg-white/10 text-white/70"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TEXTAREAS */}
      {[
        { label: "What camera(s) do you own?", key: "cameras" },
        { label: "What lenses do you own?", key: "lenses" },
        { label: "Do you own lighting equipment?", key: "lighting" },
        { label: "Do you own a drone?", key: "drone" },
        { label: "What editing software do you use?", key: "editing" },
      ].map((item) => (
        <div key={item.key}>
          <label className="label">{item.label}</label>
          <textarea
            className="input"
            value={form[item.key]}
            onChange={(e)=>setForm({...form,[item.key]:e.target.value})}
          />
        </div>
      ))}

      {/* PRICING */}
      <div>
        <label className="label">Hourly Price</label>
        <input className="input" placeholder="Enter hourly price"
          value={form.hourlyPrice}
          onChange={(e)=>setForm({...form, hourlyPrice:e.target.value})}/>
      </div>

      <div>
        <label className="label">Package Price</label>
        <input className="input" placeholder="Enter package price"
          value={form.packagePrice}
          onChange={(e)=>setForm({...form, packagePrice:e.target.value})}/>
      </div>

      {/* TOGGLES */}
      <Toggle label="Available for urgent bookings" value={form.urgent}
        onChange={(v)=>setForm({...form, urgent:v})}/>
      <Toggle label="Willing to travel outside city" value={form.travel}
        onChange={(v)=>setForm({...form, travel:v})}/>

      {/* CONDITIONAL ACCORDION */}
      {form.travel && (
        <Accordion title="Secondary Working Location">

          <select value={state} onChange={(e)=>setState(e.target.value)} className="input mb-3">
            <option>Select State</option>
            <option>Madhya Pradesh</option>
            <option>Delhi</option>
          </select>

          <div className="flex flex-wrap gap-2 mb-3">
            {["Indore","Bhopal","Delhi","Mumbai"].map((c)=>(
              <div key={c}
                onClick={()=>setCities(prev=>prev.includes(c)?prev.filter(i=>i!==c):[...prev,c])}
                className={`chip-select ${cities.includes(c) && "active"}`}>
                {c}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button onClick={addLocation} className="btn">Save Location</button>
            <button className="btn">Add More</button>
          </div>

          {savedLocations.map((loc,i)=>(
            <p key={i} className="text-white/50 mt-2">
              • {loc.state} : {loc.cities.join(", ")}
            </p>
          ))}

        </Accordion>
      )}

      <Toggle label="Cancellation Policy" value={form.cancellation}
        onChange={(v)=>setForm({...form, cancellation:v})}/>
      <Toggle label="Platform Commission Agreement" value={form.agreement}
        onChange={(v)=>setForm({...form, agreement:v})}/>

      {/* BANK */}
      <Accordion title="Bank Information">
        <div className="space-y-4">
          <input className="input" placeholder="Account Number" />
          <div className="upload-box">
            Tap to upload passbook
          </div>
          <input className="input" placeholder="UPI ID" />
          <input className="input" placeholder="Bank Name" />
          <input className="input" placeholder="Branch Name" />
          <input className="input" placeholder="IFSC Code" />
        </div>
      </Accordion>

    </div>
  );
}

/* ===== TOGGLE ===== */
const Toggle = ({ label, value, onChange }) => (
  <div className="flex justify-between items-center">
    <span className="text-white/70">{label}</span>
    <div
      onClick={()=>onChange(!value)}
      className={`w-12 h-6 rounded-full ${value ? "bg-green-500":"bg-gray-500"} cursor-pointer`}
    >
      <div className={`toggle-dot ${value && "on"}`} />
    </div>
  </div>
);