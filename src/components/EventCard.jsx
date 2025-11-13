import React from 'react';

export default function EventCard({ event }){
  return (
    <div className="bg-white p-3 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold">{event.title}</h5>
        <div className="text-xs text-gray-500">{new Date(event.date).toLocaleDateString()}</div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{event.location}</p>
      <p className="mt-2 text-sm text-gray-500">{(event.description || '').slice(0,120)}</p>
    </div>
  );
}