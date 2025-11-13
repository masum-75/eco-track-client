import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer(){
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 mt-12 border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold">EcoTrack</h3>
          <p className="text-sm text-gray-600 mt-2">Community-driven platform for measurable sustainability.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-sm text-gray-700">
            <li>About</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Follow</h4>
          <div className="mt-2 flex gap-3">
            <a aria-label="X (formerly Twitter)" href="#"><FaXTwitter/></a>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-gray-600 border-t">© {year} EcoTrack</div>
    </footer>
  );
}