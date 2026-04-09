// Step2About.jsx
import { useState, useEffect } from "react";
import ChipSelect from "./ChipSelect";
import SearchDropdown from "./SearchDropdown";

const stateOptions = ["Madhya Pradesh", "Uttar Pradesh", "Maharashtra", "Delhi", "Rajasthan"];
const cityMap = {
  "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Ujjain"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Noida"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini", "Saket", "Lajpat Nagar"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"],
};

export default function Step2({ registerValidate }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [languages, setLanguages] = useState([]);

  const languageOptions = ["English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam", "Bengali", "Marathi"];

  useEffect(() => {
    registerValidate(() => {
      if (!name.trim()) return "Full name is required.";
      if (!gender) return "Please select a gender.";
      if (!dob) return "Date of birth is required.";
      if (!address.trim()) return "Address is required.";
      if (!state) return "Please select a state.";
      if (!city) return "Please select a city.";
      if (!pincode || pincode.length !== 6) return "Enter a valid 6-digit pincode.";
      if (!languages.length) return "Select at least one language.";
      return null;
    });
  }, [name, gender, dob, address, state, city, pincode, languages]);

  return (
    <div>
      <h2 className="text-xl text-white mb-2">Tell Us About Yourself</h2>
      <p className="text-white/50 mb-6">Help us know you better with some basic information.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-white/60 mb-2">Full Name</label>
          <input placeholder="Enter your full name" className="w-full input" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <SearchDropdown label="Gender" options={["Male", "Female", "Other"]} value={gender} onChange={setGender} placeholder="Select gender" />

        <div>
          <label className="block text-white/60 mb-2">Date of Birth</label>
          <input type="date" className="w-full input" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>

        <div>
          <label className="block text-white/60 mb-2">Permanent Address</label>
          <textarea placeholder="Enter your complete address" className="w-full input" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <SearchDropdown
          label="State"
          options={stateOptions}
          value={state}
          onChange={(v) => { setState(v); setCity(""); }}
          placeholder="Select state"
        />

        <SearchDropdown
          label="City"
          options={state ? cityMap[state] : []}
          value={city}
          onChange={setCity}
          placeholder={state ? "Select city" : "Select state first"}
        />

        <div>
          <label className="block text-white/60 mb-2">Pincode</label>
          <input placeholder="Enter pincode" maxLength={6} className="w-full input" value={pincode} onChange={(e) => setPincode(e.target.value.replace(/\D/, ""))} />
        </div>

        <div>
          <p className="text-white/60 mb-2">Languages Known</p>
          <ChipSelect options={languageOptions} selected={languages} setSelected={setLanguages} />
        </div>
      </div>
    </div>
  );
}
