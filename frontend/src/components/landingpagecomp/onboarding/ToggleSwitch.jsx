// ToggleSwitch.jsx
export default function Toggle({ enabled, setEnabled }) {
  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`
        w-12 h-6 rounded-full cursor-pointer
        ${enabled ? "bg-green-500" : "bg-gray-400"}
      `}
    >
      <div
        className={`
          w-5 h-5 bg-white rounded-full mt-0.5 transition-all
          ${enabled ? "ml-6" : "ml-1"}
        `}
      />
    </div>
  );
}