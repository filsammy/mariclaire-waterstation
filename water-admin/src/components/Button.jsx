export default function Button({
  children,
  onClick,
  type = "button",
  color = "sky",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-${color}-700 text-white px-4 py-2 rounded hover:bg-${color}-600 transition ${className}`}
    >
      {children}
    </button>
  );
}
