import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, e.target.email.value);
      toast.success("If an account exists, a reset email has been sent.");
    } catch (err) {
      toast.error("Failed to send reset email",err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Forgot Password</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input name="email" type="email" required placeholder="Email" className="input w-full" />
        <button disabled={loading} className="mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white">{loading ? "Sending..." : "Send Reset Email"}</button>
      </form>
    </div>
  );
}