import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

export default function ChallengeDetails() {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchChallenge() {
      try {
        const headers = {};
        if (user) {
          const token = await user.getIdToken();
          headers.Authorization = `Bearer ${token}`;
        }
        const res = await axios.get(`http://localhost:3000/challenges/${id}`, { headers });
        setChallenge(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchChallenge();
  }, [id, user]);

  async function handleJoin() {
    if (!user) return navigate("/login", { state: { from: `/challenges/${id}` } });
    try {
      const token = await user.getIdToken();
      await axios.post(
        `http://localhost:3000/challenges/join/${id}`,
        { userId: user.uid, userEmail: user.email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Joined challenge successfully");
      const updated = await axios.get(`http://localhost:3000/challenges/${id}`, {
        headers: { Authorization: `Bearer ${await user.getIdToken()}` },
      });
      setChallenge(updated.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to join challenge");
    }
  }

  if (!challenge) return <div className="p-6">Loading...</div>;

  return (
    <div>
      <img src={challenge.imageUrl} alt={challenge.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{challenge.title}</h1>
      <div className="text-sm text-gray-500">
        {challenge.category} • {challenge.duration} days
      </div>
      <p className="mt-4 text-gray-700">{challenge.description}</p>
      <div className="mt-4">
        <button
          onClick={handleJoin}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white"
        >
          Join
        </button>
      </div>
    </div>
  );
}