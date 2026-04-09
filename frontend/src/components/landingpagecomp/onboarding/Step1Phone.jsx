// Step1Phone.jsx
export default function Step1() {
  return (
    <div>
      <h2 className="text-xl text-white mb-2">
        Verify Your Phone Number
      </h2>

      <p className="text-white/50 mb-6">
        We use your phone number for booking confirmations and security.
      </p>

      <div className="flex gap-3">
        <div className="px-4 py-3 rounded-lg text-white bg-white/5 border border-white/10">
          +91
        </div>

        <input
          placeholder="Enter your phone number"
          className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none text-white"
        />
      </div>

      <button className="w-full mt-4 py-3 rounded-lg bg-white text-black">
        Request OTP
      </button>
    </div>
  );
}