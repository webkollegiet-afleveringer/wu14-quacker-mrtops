import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./Pages/Home";
import Trends from "./Pages/Trends";
import Notifications from "./Pages/Notifications";
import Messages from "./Pages/Messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'trends', element: <Trends /> },
      { path: 'notifications', element: <Notifications /> },
      { path: 'messages', element: <Messages /> },
    ]
  }
])

export default router;