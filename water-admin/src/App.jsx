import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";

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
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}
