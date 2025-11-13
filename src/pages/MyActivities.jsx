import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function MyActivities() {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      try {
        const token = await user.getIdToken();
        const res = await axios.get(
          `http://localhost:3000/my-challenges?email=${encodeURIComponent(user.email)}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching my activities:", err);
      }
    })();
  }, [user]);

  return (
    <div>
      <h1 className="text-2xl font-bold">My Activities</h1>
      <div className="mt-4 space-y-3">
        {items.map(it => (
          <div key={it._id} className="p-4 bg-white rounded shadow">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">Challenge ID: {String(it.challengeId)}</div>
                <div className="text-sm text-gray-600">Status: {it.status}</div>
              </div>
              <div className="text-sm">Progress: {it.progress}%</div>
            </div>
          </div>
        ))}
        {items.length === 0 && <div className="text-gray-500">No joined challenges yet.</div>}
      </div>
    </div>
  );
}
