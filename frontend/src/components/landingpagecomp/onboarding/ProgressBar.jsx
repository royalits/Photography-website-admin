// ProgressBar.jsx
export default function ProgressBar({ step, total }) {
  const percent = (step / total) * 100;

  return (
    <div>
      <p className="text-white/50 text-sm mb-2">
        Step {step} of {total}
      </p>

      <div className="w-full h-2 bg-white/10 rounded-full">
        <div
          style={{ width: `${percent}%` }}
          className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
        />
      </div>
    </div>
  );
}