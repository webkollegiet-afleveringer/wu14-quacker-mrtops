import { Outlet } from "react-router";
import BottomNav from "./BottomNav";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { user, logout } = useAuth();  
  
  return (
    <div>
      <div className="max-w-2xl mx-auto min-h-screen border-x border-primary-line">
        <Outlet context={{ user, logout }} />
        <BottomNav />
      </div>
    </div>
  )
}
