// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" replace />;

  if (user.email !== adminEmail) return <Navigate to="/unauthorized" replace />;

  return children;
}
