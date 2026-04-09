import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#0b0120] text-white px-6 py-24">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-white/50 mb-8">
            Have questions or need assistance? Reach out to our team.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="icon-box"><Mail size={18} /></div>
              <p className="text-white/70">support@clicknow.com</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="icon-box"><Phone size={18} /></div>
              <p className="text-white/70">+91 9109761202</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="icon-box"><MapPin size={18} /></div>
              <p className="text-white/70">Ujjain, India</p>
            </div>

          </div>
        </div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl space-y-4"
        >

          <input className="input" placeholder="Your Name" />
          <input className="input" placeholder="Email Address" />
          <input className="input" placeholder="Subject" />

          <textarea
            rows={4}
            className="input"
            placeholder="Your Message"
          />

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 text-white font-medium">
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
}