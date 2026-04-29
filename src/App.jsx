import { createBrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Trends from "./Pages/Trends";
import Notifications from "./Pages/Notifications";
import Messages from "./Pages/Messages";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><Layout /></AuthProvider>,
    children: [
      { index: true, element: <RequireAuth><Home /></RequireAuth> },
      { path: "trends", element: <RequireAuth><Trends /></RequireAuth> },
      { path: "notifications", element: <RequireAuth><Notifications /></RequireAuth> },
      { path: "messages", element: <RequireAuth><Messages /></RequireAuth> },
    ]
  },
  { path: "/login", element: <AuthProvider><Login /></AuthProvider> },
  { path: "/register", element: <AuthProvider><Register /></AuthProvider> },
])

export default router;
