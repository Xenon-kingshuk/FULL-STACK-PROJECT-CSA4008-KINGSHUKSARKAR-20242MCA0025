// src/routes/AuthWrapper.jsx
import React from "react";
import { Outlet } from "react-router-dom";

function AuthWrapper() {
  return (
    <div className="auth-wrapper">
      <Outlet />
    </div>
  );
}

export default AuthWrapper;
