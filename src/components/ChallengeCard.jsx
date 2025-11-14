import React from 'react';
import { Link } from 'react-router';

export default function ChallengeCard({ challenge }) {
  const { title, category, description, duration, participants, imageUrl, _id } = challenge;
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <img src={imageUrl || "https://via.placeholder.com/800x420"} alt={title} className="w-full h-44 object-cover rounded" />
      <h3 className="font-semibold mt-3">{title}</h3>
      <div className="text-xs text-gray-500">{category} • {duration} days</div>
      <p className="text-sm mt-2 line-clamp-2 text-gray-700">{description}</p>
      <div className="flex items-center justify-between mt-3">
        <div className="text-sm text-gray-600">{participants || 0} joined</div>
        <Link to={`/challenges/${_id}`} className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs">View</Link>
      </div>
    </div>
  );
}