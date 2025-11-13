import React from "react";
import { Link } from "react-router-dom";

export default function ChallengeCard({ c }){
  return (
    <div className="card p-4">
      <img src={c.imageUrl || 'https://via.placeholder.com/400x200'} alt={c.title} className="w-full h-40 object-cover rounded" />
      <h3 className="font-semibold mt-3">{c.title}</h3>
      <div className="text-sm text-gray-500">{c.category} • {c.duration} days</div>
      <p className="text-sm mt-2 line-clamp-2">{c.description}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="text-sm text-gray-600">{c.participants || 0} joined</div>
        <Link to={`/challenges/${c._id}`} className="btn-primary text-xs">View</Link>
      </div>
    </div>
  );
}