import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';

import { LuRotate3D } from 'react-icons/lu';
import { FaBars } from 'react-icons/fa';
import { AuthContext } from '../context/AuthProvider';

export default function NavBar() {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 header-logo">
            <LuRotate3D size={22} />
            <span className="font-semibold">EcoTrack</span>
          </Link>
          <nav className="hidden md:flex gap-4 ml-6">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-pink-600 font-semibold' : '')}>Home</NavLink>
            <NavLink to="/challenges" className={({ isActive }) => (isActive ? 'text-pink-600 font-semibold' : '')}>Challenges</NavLink>
            <NavLink to="/dashboard/my-challenges" className={({ isActive }) => (isActive ? 'text-pink-600 font-semibold' : '')}>My Activities</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <img src={user.photoURL || 'https://via.placeholder.com/40'} alt={user.displayName || 'avatar'} className="w-9 h-9 rounded-full" />
              <div className="hidden md:block">
                <div className="text-sm font-medium">{user.displayName || user.email}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
              <button onClick={() => signOutUser()} className="btn btn-sm bg-linear-to-r from-pink-500 to-red-600 text-white rounded-full">Logout</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-sm rounded-full">Login</Link>
              <Link to="/register" className="btn btn-sm bg-linear-to-r from-pink-500 to-red-600 text-white rounded-full">Register</Link>
            </div>
          )}

          <button className="md:hidden ml-2"><FaBars /></button>
        </div>
      </div>
    </header>
  );
}
