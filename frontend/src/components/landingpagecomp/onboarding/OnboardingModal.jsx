// OnboardingModal.jsx
import { useState } from "react";
import Stepper from "./Stepper";
import ProgressBar from "./ProgressBar";

import Step1 from "./Step1Phone";
import Step2 from "./Step2About";
import Step3 from "./Step3Professional";
import Step4 from "./Step4Legal";
import Step5 from "./Step5Services";

const steps = [
  { title: "Verify Phone" },
  { title: "About You" },
  { title: "Professional" },
  { title: "Legal" },
  { title: "Services" }
];

export default function OnboardingModal({ onClose }) {
  const [step, setStep] = useState(1);

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const prev = () => setStep((s) => Math.max(s - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1: return <Step1 />;
      case 2: return <Step2 />;
      case 3: return <Step3 />;
      case 4: return <Step4 />;
      case 5: return <Step5 />;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        relative
        w-full max-w-3xl
        bg-gradient-to-b from-[#120626] to-[#0b041a]
        rounded-2xl border border-white/10
        p-6
      ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition"
        >
          ✕
        </button>

        <Stepper step={step} steps={steps} />
        <ProgressBar step={step} total={5} />

        <div className="mt-6 h-[350px] overflow-y-auto scrollbar-hide animate-fadeIn">
          {renderStep()}
        </div>

        {/* Footer buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prev}
            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70"
          >
            Back
          </button>

          <button
            onClick={next}
            className="px-8 py-3 rounded-xl bg-white text-black font-medium"
          >
            Continue
          </button>
        </div>

        <p className="text-center text-xs text-white/40 mt-6">
          Need help? Contact support at{" "}
          <span className="text-primary">support@example.com</span>
        </p>

      </div>
    </div>
  );
}