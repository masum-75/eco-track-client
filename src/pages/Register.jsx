import React, { useContext, useState } from "react";

import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

export default function Register() {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  function validatePassword(p) {
    if (p.length < 6) return "Minimum 6 characters";
    if (!/[A-Z]/.test(p)) return "At least one uppercase letter";
    if (!/[a-z]/.test(p)) return "At least one lowercase letter";
    if (!/[^A-Za-z0-9]/.test(p)) return "At least one special character";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const err = validatePassword(password);
    if (err) { toast.error(err); setLoading(false); return; }

    try {
      await createUser(email, password);
      await updateUserProfile(name, photo);
      toast.success("Account created");
      nav("/");
    } catch (err) {
      toast.error(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Registered");
      nav("/");
    } catch (err) {
      toast.error(err.message || "Google signup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Join EcoTrack</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input name="name" required placeholder="Full name" className="input w-full" />
        <input name="photo" placeholder="Photo URL" className="input w-full" />
        <input name="email" type="email" required placeholder="Email" className="input w-full" />
        <input name="password" type="password" required placeholder="Password" className="input w-full" />
        <button disabled={loading} className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white">{loading ? "Creating..." : "Register"}</button>
      </form>
      <button onClick={handleGoogle} className="mt-3 w-full px-4 py-2 rounded border">Register with Google</button>
    </div>
  );
}