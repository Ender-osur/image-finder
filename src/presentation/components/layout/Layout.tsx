import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-app">
        <Outlet />
      </main>
    </div>
  );
}
