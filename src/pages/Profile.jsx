import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";


export default function Profile() {
  const { user } = useContext(AuthContext);

  
  if (!user) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md text-center">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile</h2>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="Profile"
          className="w-16 h-16 rounded-full border"
        />
        <div>
          <p className="text-lg font-medium text-gray-900">
            {user.displayName || "No Name Provided"}
          </p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="space-y-3 text-gray-700">
        <div>
          <strong>Name:</strong> {user.displayName || "—"}
        </div>

        <div>
          <strong>Email:</strong> {user.email}
        </div>
      </div>
    </div>
  );
}
