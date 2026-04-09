// Step3Professional.jsx
import Accordion from "./Accordion";
import ChipSelect from "./ChipSelect";
import { useState } from "react";

export default function Step3() {
  const [days, setDays] = useState([]);

  const weekDays = [
    "Monday","Tuesday","Wednesday",
    "Thursday","Friday","Saturday","Sunday"
  ];

  return (
    <div>
      <h2 className="text-xl text-white mb-2">
        Build Your Professional Profile
      </h2>

      <p className="text-white/50 mb-6">
        This information will be visible to customers.
      </p>

      <div className="space-y-4">

        <Accordion title="Work Information">
          <select className="w-full input mb-4">
            <option>Years of Experience</option>
            <option>1 Year</option>
            <option>2 Years</option>
          </select>

          <p className="text-white/60 mb-2">Available Working Days</p>
          <ChipSelect options={weekDays} selected={days} setSelected={setDays} />

          <textarea
            placeholder="Tell customers about yourself..."
            className="w-full input mt-4"
          />
        </Accordion>

        <Accordion title="Working Locations">
          <select className="w-full input mb-3">
            <option>Select state</option>
          </select>

          <select className="w-full input mb-3">
            <option>Select city</option>
          </select>

          <div className="flex gap-3">
            <button className="btn-light">Save Location</button>
            <button className="btn-light">Add More</button>
          </div>
        </Accordion>

        <Accordion title="Profile & Online Presence">
          <input
            placeholder="Instagram Profile URL"
            className="w-full input mb-3"
          />
          <input
            placeholder="Website URL (optional)"
            className="w-full input"
          />
        </Accordion>

        <Accordion title="Additional Details">
          <input placeholder="Company/Brand Name" className="w-full input mb-3"/>
          <input placeholder="Past Client Experience" className="w-full input mb-3"/>
          <input placeholder="Awards & Achievements" className="w-full input"/>
        </Accordion>

      </div>
    </div>
  );
}