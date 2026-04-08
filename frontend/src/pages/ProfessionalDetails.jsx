import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Download,
  Eye,
} from "lucide-react";

/* ---------------- MOCK FILE URLS ---------------- */
const mockDocs = {
  pan: "https://example.com/pan.pdf",
  aadhar: "https://example.com/aadhar.pdf",
  passbook: "https://example.com/passbook.pdf",
};

/* ---------------- ACCORDION ---------------- */
const Section = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl">
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center p-4 cursor-pointer"
      >
        <h2 className="font-medium">{title}</h2>
        {open ? <ChevronUp /> : <ChevronDown />}
      </div>

      {open && (
        <div className="p-4 border-t border-white/10">{children}</div>
      )}
    </div>
  );
};

/* ---------------- BUTTON HANDLERS ---------------- */
const previewFile = (url) => {
  window.open(url, "_blank");
};

const downloadFile = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "document";
  link.click();
};

/* ---------------- PAGE ---------------- */
const ProfessionalDetails = () => {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Professional Details</h1>
          <p className="text-sm text-gray-400">ID: PRO001234</p>
        </div>

        <span className="px-3 py-1 text-sm rounded-full bg-yellow-500/20 text-yellow-400">
          Pending
        </span>
      </div>

      {/* BASIC VERIFICATION */}
      <Section title="Basic Verification">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <p>Phone Number: +91 8305776537</p>
          <p>
            OTP Status:{" "}
            <span className="text-green-400">Verified</span>
          </p>
          <p>Professional ID: PRO001234</p>
        </div>
      </Section>

      {/* PERSONAL DETAILS */}
      <Section title="Personal Details">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <p>Full Name: Tarun Jain</p>
          <p>Gender: Male</p>
          <p>Date of Birth: 09-07-2003</p>
          <p>PIN Code: 470002</p>
          <p className="md:col-span-2">
            Address: Vijay Nagar, Indore, Madhya Pradesh
          </p>

          <div className="md:col-span-2 flex gap-2 mt-2">
            <span className="px-2 py-1 bg-white/10 rounded">Hindi</span>
            <span className="px-2 py-1 bg-white/10 rounded">English</span>
          </div>
        </div>
      </Section>

      {/* PROFESSIONAL PROFILE */}
      <Section title="Professional Profile">
        <div className="space-y-3 text-sm">
          <p>Experience: 8 years</p>
          <p>Company / Brand: -</p>

          <p>
            Primary Locations: Madhya Pradesh (Indore, Bhopal),
            Maharashtra (Mumbai, Pune)
          </p>

          <p>
            Secondary Locations: Madhya Pradesh, Maharashtra
          </p>

          <div className="flex gap-2 flex-wrap">
            {["Mon", "Tue", "Wed", "Thu"].map((day) => (
              <span key={day} className="px-2 py-1 bg-white/10 rounded">
                {day}
              </span>
            ))}
          </div>

          <p className="text-gray-400">
            Passionate wedding and event photographer with 8+
            years experience...
          </p>

          <div className="space-y-1">
            <p>Portfolio:</p>
            <a href="#" className="text-purple-400">Google Drive</a>
            <a href="#" className="text-purple-400">Instagram</a>
            <a href="#" className="text-purple-400">Website</a>
          </div>
        </div>
      </Section>

      {/* LEGAL */}
      <Section title="Legal & Identity Verification">
        <div className="space-y-4 text-sm">

          <p>Aadhar: 1234 5678 9001</p>
          <p>PAN: ABCDE1234F</p>

          {/* PAN */}
          <div className="flex justify-between items-center bg-white/5 p-3 rounded">
            <span>PAN Card</span>
            <div className="flex gap-2">
              <button
                onClick={() => previewFile(mockDocs.pan)}
                className="px-3 py-1 bg-white/10 rounded flex items-center gap-1"
              >
                <Eye size={14} /> Preview
              </button>

              <button
                onClick={() => downloadFile(mockDocs.pan)}
                className="px-3 py-1 bg-white/10 rounded"
              >
                <Download size={14} />
              </button>
            </div>
          </div>

          {/* AADHAR */}
          <div className="flex justify-between items-center bg-white/5 p-3 rounded">
            <span>Aadhar Card</span>
            <div className="flex gap-2">
              <button
                onClick={() => previewFile(mockDocs.aadhar)}
                className="px-3 py-1 bg-white/10 rounded flex items-center gap-1"
              >
                <Eye size={14} /> Preview
              </button>

              <button
                onClick={() => downloadFile(mockDocs.aadhar)}
                className="px-3 py-1 bg-white/10 rounded"
              >
                <Download size={14} />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section title="Services Details">
        <div className="space-y-2 text-sm">
          <p>Service Type: Photo & Videography</p>
          <p>Specialties: Wedding, Corporate, Family</p>

          <div className="flex gap-3 flex-wrap">
            <span className="bg-green-500/20 px-2 py-1 rounded">
              Available
            </span>
            <span className="bg-blue-500/20 px-2 py-1 rounded">
              Travel Allowed
            </span>
            <span className="bg-green-500/20 px-2 py-1 rounded">
              Cancellation Accepted
            </span>
          </div>
        </div>
      </Section>

      {/* QUESTIONS */}
      <Section title="Services Specific Questions">
        <div className="space-y-2 text-sm">
          <p>Full-time: Yes</p>
          <p>Team size: 5-10</p>
          <p>Cameras: Canon EOS R5</p>
          <p>Lenses: 24-70mm, 50mm</p>
          <p>Lighting: Yes</p>
          <p>Drone: Yes</p>
          <p>Editing: Lightroom, Premiere Pro</p>
          <p>Hourly Price: ₹2000</p>
          <p>Package Price: ₹5000</p>
        </div>
      </Section>

      {/* FINANCIAL */}
      <Section title="Financial Details">
        <div className="space-y-4 text-sm">

          <p>Account Holder: Tarun Jain</p>
          <p>Account Number: 1234567890</p>
          <p>Bank: HDFC</p>
          <p>IFSC: HDFC0001234</p>
          <p>UPI: tarun@upi</p>

          <div className="flex justify-between items-center bg-white/5 p-3 rounded">
            <span>Bank Passbook</span>
            <div className="flex gap-2">
              <button
                onClick={() => previewFile(mockDocs.passbook)}
                className="px-3 py-1 bg-white/10 rounded flex items-center gap-1"
              >
                <Eye size={14} /> Preview
              </button>

              <button
                onClick={() => downloadFile(mockDocs.passbook)}
                className="px-3 py-1 bg-white/10 rounded"
              >
                <Download size={14} />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* ACTIONS */}
      <div className="flex gap-4 flex-wrap">
        <button className="bg-green-600 px-5 py-2 rounded-lg">
          Approve Application
        </button>

        <button className="bg-red-600 px-5 py-2 rounded-lg">
          Reject Application
        </button>

        <button className="bg-yellow-500 px-5 py-2 rounded-lg">
          Re-upload Documents
        </button>
      </div>
    </div>
  );
};

export default ProfessionalDetails;