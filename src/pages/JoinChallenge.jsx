import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const JoinChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function load() {
      try {
        const res = await axios.get("http://localhost:3000/challenges");
        setChallenges(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  const handleJoin = async (challenge) => {
    if (!user) {
      Swal.fire("Please login to join a challenge");
      return;
    }
    try {
      const token = await user.getIdToken();
      const res = await axios.post(
        `http://localhost:3000/challenges/join/${challenge._id}`,
        { userId: user.uid, userEmail: user.email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status === 200 || res.status === 201) {
        Swal.fire("Joined Successfully!", "", "success");
      } else {
        Swal.fire("Error joining challenge", "", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error joining challenge", err?.message || "", "error");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Join Challenges</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {challenges.map(challenge => (
          <div key={challenge._id} className="border p-4 rounded-xl shadow-md">
            <img
              src={challenge.imageUrl || "https://via.placeholder.com/400x300"}
              alt={challenge.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3 className="text-xl font-semibold mt-3">{challenge.title}</h3>
            <p className="text-gray-700 mt-2">{challenge.description.slice(0, 100)}...</p>
            <button
              onClick={() => handleJoin(challenge)}
              className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinChallenges;