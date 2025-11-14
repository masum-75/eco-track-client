import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../context/AuthProvider";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="p-6">Loading...</div>;

  if (!user)
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );

  return children;
}
