// Step3Professional.jsx
import Accordion from "./Accordion";
import ChipSelect from "./ChipSelect";
import SearchDropdown from "./SearchDropdown";
import CityMultiSelect from "./CityMultiSelect";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

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
        label="Working State"
        options={Object.keys(stateCities)}
        value={state}
        onChange={(v) => { setState(v); setSelectedCities([]); }}
        placeholder="Select state"
      />

      {state && (
        <CityMultiSelect
          label="Working City"
          options={stateCities[state]}
          selected={selectedCities}
          onChange={setSelectedCities}
        />
      )}

      <button onClick={handleSave} className="btn-light mt-1">Save Location</button>
    </div>
  );
}

export default function Step3({ registerValidate }) {
  const [days, setDays] = useState([]);
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [blocks, setBlocks] = useState([0]);
  const [savedLocations, setSavedLocations] = useState([]);

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  useEffect(() => {
    registerValidate(() => {
      if (!experience) return "Please select years of experience.";
      if (!days.length) return "Select at least one working day.";
      if (!bio.trim()) return "Short bio is required.";
      if (!savedLocations.length) return "Please save at least one working location.";
      return null;
    });
  }, [experience, days, bio, savedLocations]);

  const handleSave = (data) => {
    setSavedLocations((prev) => {
      const idx = prev.findIndex((l) => l.state === data.state);
      if (idx >= 0) { const u = [...prev]; u[idx] = data; return u; }
      return [...prev, data];
    });
  };

  const addBlock = () => setBlocks((prev) => [...prev, prev.length]);
  const removeBlock = (i) => setBlocks((prev) => prev.filter((_, idx) => idx !== i));

  return (
    <div>
      <h2 className="text-xl text-white mb-2">Build Your Professional Profile</h2>
      <p className="text-white/50 mb-6">This information will be visible to customers.</p>

      <div className="space-y-4">
        <Accordion title="Work Information">
          <SearchDropdown
            label="Years of Experience"
            options={["1 Year", "2 Years", "3 Years", "4 Years", "5+ Years"]}
            value={experience}
            onChange={setExperience}
            placeholder="Select experience"
          />

          <p className="text-white/60 mt-4 mb-2">Available Working Days</p>
          <ChipSelect options={weekDays} selected={days} setSelected={setDays} />

          <label className="block text-white/60 mt-5 mb-2">Short Bio</label>
          <textarea
            placeholder="Tell customers about yourself and your expertise"
            className="w-full input mt-1 resize-none h-24"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Accordion>

        <Accordion title="Working Locations">
          <div className="space-y-4">
            {blocks.map((_, i) => (
              <LocationBlock key={i} index={i} onSave={handleSave} onRemove={() => removeBlock(i)} />
            ))}

            <button onClick={addBlock} className="btn-light w-full">+ Add More Location</button>

            {savedLocations.length > 0 && (
              <div className="mt-3 space-y-2">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Saved Locations</p>
                {savedLocations.map((loc, i) => (
                  <div key={i} className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-purple-300 text-sm font-medium">{loc.state}</span>
                    <span className="text-white/30">—</span>
                    {loc.cities.map((c) => (
                      <span key={c} className="chip text-xs">{c}</span>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </Accordion>

        <Accordion title="Profile & Online Presence">
          <label className="block text-white/60 mt-2 mb-2">Google Work Drive URL</label>
          <input placeholder="Google Work Drive URL" className="w-full input mb-3" />

          <label className="block text-white/60 mt-2 mb-2">Instagram Profile URL</label>
          <input placeholder="Instagram Profile URL" className="w-full input mb-3" />

          <label className="block text-white/60 mt-5 mb-2">Personal/Company Website</label>
          <input placeholder="Website URL (optional)" className="w-full input" />
        </Accordion>

        <Accordion title="Additional Details">
          <label className="block text-white/60 mt-3 mb-2">Company/Brand Name (optional)</label>
          <input placeholder="Company/Brand Name" className="w-full input mb-3" />

          <label className="block text-white/60 mt-5 mb-2">Past Client Experience (optional)</label>
          <input placeholder="Past Client Experience" className="w-full input mb-3" />

          <label className="block text-white/60 mt-5 mb-2">Awards & Achievements (optional)</label>
          <input placeholder="Awards & Achievements" className="w-full input" />
        </Accordion>
      </div>
    </div>
  );
}
