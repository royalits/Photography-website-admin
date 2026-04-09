// Accordion.jsx
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl bg-white/5">
      
      <div
        onClick={() => setOpen(!open)}
        className="p-4 flex justify-between cursor-pointer"
      >
        <span className="text-white">{title}</span>
        <span className="text-white">{open ? "−" : "+"}</span>
      </div>

      {open && <div className="p-4 border-t border-white/10">{children}</div>}
    </div>
  );
}