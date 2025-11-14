import React from 'react';
import { Outlet, Link } from 'react-router';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white border-r p-4">
        <h3 className="font-bold text-lg text-green-600">EcoTrack Dashboard</h3>
        <nav className="mt-4 flex flex-col gap-2">
          <Link to="/dashboard" className="text-sm">Overview</Link>
          <Link to="/dashboard/my-challenges" className="text-sm">My Challenges</Link>
          <Link to="/dashboard/add-challenge" className="text-sm">Add Challenge</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}