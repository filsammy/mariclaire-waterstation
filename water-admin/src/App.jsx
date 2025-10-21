import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";
import AdminLogin from "@/pages/AdminLogin";
import Unauthorized from "@/pages/Unauthorized";
import ProtectedRoute from "@/components/ProtectedRoute";
import { ToastProvider } from "@/context/ToastContext";

export default function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          {/* Login route */}
          <Route path="/login" element={<AdminLogin />} />

          {/* Unauthorized Admin Login */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Dashboard route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="flex h-screen">
                  <Sidebar />
                  <div className="flex flex-col flex-1">
                    <Header />
                    <main className="p-6 flex-1 overflow-auto">
                      <Dashboard />
                    </main>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />

          {/* Default route → redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}
