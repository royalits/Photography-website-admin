// Step2About.jsx
import { useState } from "react";
import ChipSelect from "./ChipSelect";

export default function Step2() {
  const [languages, setLanguages] = useState([]);

  const languageOptions = [
    "English", "Hindi", "Tamil", "Telugu",
    "Kannada", "Malayalam", "Bengali", "Marathi"
  ];

  return (
    <div>
      <h2 className="text-xl text-white mb-2">
        Tell Us About Yourself
      </h2>

      <p className="text-white/50 mb-6">
        Help us know you better with some basic information.
      </p>

      <div className="space-y-4">

        <input
          placeholder="Enter your full name"
          className="w-full input"
        />

        <select className="w-full  input">
          <option>Select gender</option>
          <option className="text-black">Male</option>
          <option className="text-black">Female</option>
        </select>

        <input type="date" className="w-full input" />

        <textarea
          placeholder="Enter your complete address"
          className="w-full input"
        />

        <select className="w-full input">
          <option>Select state</option>
          <option className="text-black">Madhya Pradesh</option>
        </select>

        <select className="w-full input">
          <option>Select city</option>
          <option className="text-black">Indore</option>
        </select>

        <input
          placeholder="Enter pincode"
          className="w-full input"
        />

        <div>
          <p className="text-white/60 mb-2">Languages Known</p>
          <ChipSelect
            options={languageOptions}
            selected={languages}
            setSelected={setLanguages}
          />
        </div>

      </div>
    </div>
  );
}