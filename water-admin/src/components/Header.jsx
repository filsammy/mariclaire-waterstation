import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login"); // Redirect back to login
  };

  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-sky-700">Dashboard</h1>

      <div className="flex items-center gap-3">
        {/* Display logged-in admin email */}
        <div className="text-right">
          <span className="text-sky-700 font-medium">
            {user ? user.email : "Admin"}
          </span>
        </div>

        <img
          src={`https://ui-avatars.com/api/?name=${
            user?.email?.split("@")[0] || "Admin"
          }`}
          alt="Profile"
          className="w-8 h-8 rounded-full border"
        />

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
