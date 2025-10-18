export default function Sidebar() {
  return (
    <aside className="w-64 bg-sky-700 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-8">MariClaire</h2>
      <nav className="space-y-4">
        <a href="#" className="block hover:bg-sky-600 px-3 py-2 rounded">Dashboard</a>
        <a href="#" className="block hover:bg-sky-600 px-3 py-2 rounded">Orders</a>
        <a href="#" className="block hover:bg-sky-600 px-3 py-2 rounded">Inventory</a>
        <a href="#" className="block hover:bg-sky-600 px-3 py-2 rounded">Customers</a>
      </nav>
    </aside>
  );
}
