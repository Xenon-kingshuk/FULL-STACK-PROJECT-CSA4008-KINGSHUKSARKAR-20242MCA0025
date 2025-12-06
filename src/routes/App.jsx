// src/routes/App.jsx
import { useState } from "react";
import "../routes/App.css"; // Ensure you have this CSS file for styling
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import PostListProvider from "../store/Post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="d-flex">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
