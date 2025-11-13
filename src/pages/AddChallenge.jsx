import React, { useEffect, useState } from "react";
import axios from "axios";
import ChallengeCard from "../components/ChallengeCard";

export default function AllChallenges() {
  const [list, setList] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/challenges")
      .then(res => setList(res.data))
      .catch(err => console.error("Error fetching challenges:", err));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:3000/challenges?search=${encodeURIComponent(q)}`);
      setList(res.data);
    } catch (err) {
      console.error("Search failed:", err);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">All Challenges</h2>
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="input rounded-full px-3"
            placeholder="Search"
          />
          <button className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white">
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {list.map(item => <ChallengeCard key={item._id} challenge={item} />)}
      </div>
    </div>
  );
}