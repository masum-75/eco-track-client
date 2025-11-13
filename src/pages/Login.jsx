import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router";
import toast from "react-hot-toast";

export default function Login() {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const loc = useLocation();
  const from = loc.state?.from || "/";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signInUser(email, password);
      toast.success("Logged in");
      nav(from, { replace: true });
    } catch (err) {
      toast.error(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Logged in");
      nav(from, { replace: true });
    } catch (err) {
      toast.error(err.message || "Google login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Login to EcoTrack</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input name="email" type="email" required placeholder="Email" className="input w-full" />
        <input name="password" type="password" required placeholder="Password" className="input w-full" />
        <div className="flex items-center justify-between">
          <a href="/forgot-password" className="text-sm">Forgot password?</a>
          <button disabled={loading} className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white">{loading ? "Logging..." : "Login"}</button>
        </div>
      </form>
      <button onClick={handleGoogle} className="mt-3 w-full px-4 py-2 rounded border">Login with Google</button>
    </div>
  );
}