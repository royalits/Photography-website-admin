import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, ShieldCheck, CreditCard } from "lucide-react";
import Accordion from "../landingpagecomp/onboarding/Accordion";

const faqs = [
  {
    q: "How do I book a professional?",
    a: "Browse services, select your preferred professional, and confirm booking with secure payment.",
  },
  {
    q: "Can I cancel a booking?",
    a: "Yes, cancellation depends on the provider's policy shown during booking.",
  },
  {
    q: "How do payments work?",
    a: "Payments are securely processed through our encrypted gateway.",
  },
  {
    q: "When will I get a refund?",
    a: "Refund timelines vary between 3–7 business days depending on your bank.",
  },
];

const helpCards = [
  {
    icon: <HelpCircle size={22} />,
    title: "General Help",
    desc: "Browse common questions and platform guidance.",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Booking Support",
    desc: "Issues with booking, scheduling or confirmations.",
  },
  {
    icon: <CreditCard size={22} />,
    title: "Payments",
    desc: "Payment issues, refunds, and invoices.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Security",
    desc: "Account safety and verification support.",
  },
];

export default function Support() {
  return (
    <section className="min-h-screen bg-[#0b0120] text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Support Center
          </h1>
          <p className="text-white/50 mt-3">
            We're here to help you with anything you need.
          </p>
        </div>

        {/* HELP CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {helpCards.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-white/50 text-sm mt-1">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Accordion key={i} title={faq.q}>
                <p className="text-white/60 text-sm">
                  {faq.a}
                </p>
              </Accordion>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}