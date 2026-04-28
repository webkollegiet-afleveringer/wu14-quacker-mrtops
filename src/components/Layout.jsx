import { Outlet } from "react-router";
import BottomNav from "./BottomNav";

export default function Layout() {
  
  return (
    <div>
      <Outlet />
      <BottomNav />
    </div>
  )
}