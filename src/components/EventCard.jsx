import React from "react";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow p-3">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-sm">{event.title}</h4>
          <div className="text-xs text-gray-500">{event.location}</div>
        </div>
        <div className="text-xs text-gray-400">{event.date ? new Date(event.date).toLocaleDateString() : ""}</div>
      </div>
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{event.description}</p>
    </div>
  );
}