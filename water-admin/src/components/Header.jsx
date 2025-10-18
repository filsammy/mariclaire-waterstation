export default function Header() {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-sky-700">Dashboard</h1>
      <div className="flex items-center gap-3">
        <span className="text-sky-700 font-medium">Admin</span>
        <img
          src="https://ui-avatars.com/api/?name=Admin"
          alt="Profile"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}
