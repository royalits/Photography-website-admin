import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Download, Eye } from "lucide-react";
import Badge from "../components/ui/Badge";
import Card from "../components/ui/Card";

const mockDocs = {
  pan: "https://example.com/pan.pdf",
  aadhar: "https://example.com/aadhar.pdf",
  passbook: "https://example.com/passbook.pdf",
};

const Section = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  return (
    <Card className="rounded-3xl p-0">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-300 hover:bg-white/[0.03] md:px-6"
      >
        <h2 className="font-display text-lg font-semibold text-white">{title}</h2>
        <span className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white/65">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {open && <div className="border-t border-white/10 px-5 py-5 md:px-6">{children}</div>}
    </Card>
  );
};

const previewFile = (url) => {
  window.open(url, "_blank");
};

const downloadFile = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = "document";
  link.click();
};

const DocRow = ({ label, url }) => (
  <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
    <span className="text-sm text-white/80">{label}</span>
    <div className="flex items-center gap-2">
      <button
        onClick={() => previewFile(url)}
        className="btn-secondary rounded-lg px-3 py-1.5 text-xs"
      >
        <Eye size={13} />
        Preview
      </button>
      <button
        onClick={() => downloadFile(url)}
        className="btn-secondary rounded-lg px-3 py-1.5 text-xs"
        aria-label={`Download ${label}`}
      >
        <Download size={13} />
      </button>
    </div>
  </div>
);

const ProfessionalDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-6 pb-2"
    >
      <section className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Profile</p>
          <h1 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Professional Details
          </h1>
          <p className="mt-1 text-sm text-white/60">ID: PRO001234</p>
        </div>

        <Badge variant="pending">Pending</Badge>
      </section>

      <Section title="Basic Verification">
        <div className="grid gap-4 text-sm text-white/75 md:grid-cols-2">
          <p>Phone Number: +91 8305776537</p>
          <p>
            OTP Status: <span className="text-emerald-300">Verified</span>
          </p>
          <p>Professional ID: PRO001234</p>
        </div>
      </Section>

      <Section title="Personal Details">
        <div className="grid gap-4 text-sm text-white/75 md:grid-cols-2">
          <p>Full Name: Tarun Jain</p>
          <p>Gender: Male</p>
          <p>Date of Birth: 09-07-2003</p>
          <p>PIN Code: 470002</p>
          <p className="md:col-span-2">Address: Vijay Nagar, Indore, Madhya Pradesh</p>

          <div className="md:col-span-2 flex flex-wrap gap-2">
            <Badge variant="neutral">Hindi</Badge>
            <Badge variant="neutral">English</Badge>
          </div>
        </div>
      </Section>

      <Section title="Professional Profile">
        <div className="space-y-3 text-sm text-white/75">
          <p>Experience: 8 years</p>
          <p>Company / Brand: -</p>
          <p>Primary Locations: Madhya Pradesh (Indore, Bhopal), Maharashtra (Mumbai, Pune)</p>
          <p>Secondary Locations: Madhya Pradesh, Maharashtra</p>

          <div className="flex flex-wrap gap-2">
            {["Mon", "Tue", "Wed", "Thu"].map((day) => (
              <Badge key={day} variant="neutral">
                {day}
              </Badge>
            ))}
          </div>

          <p className="text-white/55">
            Passionate wedding and event photographer with 8+ years experience...
          </p>

          <div className="space-y-1">
            <p className="text-white/80">Portfolio</p>
            <a href="#" className="block text-purple-200 transition hover:text-pink-200">
              Google Drive
            </a>
            <a href="#" className="block text-purple-200 transition hover:text-pink-200">
              Instagram
            </a>
            <a href="#" className="block text-purple-200 transition hover:text-pink-200">
              Website
            </a>
          </div>
        </div>
      </Section>

      <Section title="Legal and Identity Verification">
        <div className="space-y-4 text-sm text-white/75">
          <p>Aadhar: 1234 5678 9001</p>
          <p>PAN: ABCDE1234F</p>
          <DocRow label="PAN Card" url={mockDocs.pan} />
          <DocRow label="Aadhar Card" url={mockDocs.aadhar} />
        </div>
      </Section>

      <Section title="Services Details">
        <div className="space-y-3 text-sm text-white/75">
          <p>Service Type: Photo and Videography</p>
          <p>Specialties: Wedding, Corporate, Family</p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Available</Badge>
            <Badge variant="active">Travel Allowed</Badge>
            <Badge variant="success">Cancellation Accepted</Badge>
          </div>
        </div>
      </Section>

      <Section title="Services Specific Questions">
        <div className="grid gap-3 text-sm text-white/75 md:grid-cols-2">
          <p>Full-time: Yes</p>
          <p>Team size: 5-10</p>
          <p>Cameras: Canon EOS R5</p>
          <p>Lenses: 24-70mm, 50mm</p>
          <p>Lighting: Yes</p>
          <p>Drone: Yes</p>
          <p>Editing: Lightroom, Premiere Pro</p>
          <p>Hourly Price: Rs 2000</p>
          <p className="md:col-span-2">Package Price: Rs 5000</p>
        </div>
      </Section>

      <Section title="Financial Details">
        <div className="space-y-4 text-sm text-white/75">
          <p>Account Holder: Tarun Jain</p>
          <p>Account Number: 1234567890</p>
          <p>Bank: HDFC</p>
          <p>IFSC: HDFC0001234</p>
          <p>UPI: tarun@upi</p>
          <DocRow label="Bank Passbook" url={mockDocs.passbook} />
        </div>
      </Section>

      <section className="flex flex-wrap gap-3">
        <button className="btn-primary">Approve Application</button>
        <button className="btn-secondary border-rose-400/35 bg-rose-500/15 text-rose-100 hover:bg-rose-500/20">
          Reject Application
        </button>
        <button className="btn-secondary border-amber-400/35 bg-amber-500/15 text-amber-100 hover:bg-amber-500/20">
          Re-upload Documents
        </button>
      </section>
    </motion.div>
  );
};

export default ProfessionalDetails;
