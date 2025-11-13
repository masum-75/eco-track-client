import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  if (!user) return <div>Not logged in</div>;

  return (
    <div className="max-w-md p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Profile</h2>
      <div className="mt-3 space-y-2">
        <div><strong>Name:</strong> {user.displayName || "—"}</div>
        <div><strong>Email:</strong> {user.email}</div>
      </div>
    </div>
  );
}