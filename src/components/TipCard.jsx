import React from "react";

export default function TipCard({ tip }) {
  return (
    <div className="bg-white rounded-lg shadow p-3">
      <div className="flex justify-between">
        <h4 className="font-semibold text-sm">{tip.title}</h4>
        <div className="text-xs text-gray-400">{tip.upvotes || 0} ↑</div>
      </div>
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{tip.content}</p>
      <div className="mt-2 text-xs text-gray-500">By {tip.authorName || tip.author}</div>
    </div>
  );
}
