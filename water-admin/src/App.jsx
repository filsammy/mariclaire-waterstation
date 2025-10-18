import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 flex-1 overflow-auto">
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-lg font-semibold text-sky-700 mb-4">
              Welcome to your Admin Dashboard 💧
            </h2>
            <p className="text-gray-600">
              This is your main workspace. From here, you’ll later manage orders, inventory, and customers.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
