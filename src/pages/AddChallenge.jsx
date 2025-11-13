import React, { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function AddChallenge() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const body = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      duration: Number(form.duration.value),
      target: form.target.value,
      impactMetric: form.impactMetric.value,
      createdBy: user?.email || "anonymous",
      startDate: form.startDate.value,
      endDate: form.endDate.value,
      imageUrl: form.imageUrl.value,
      createdAt: new Date(),
      updatedAt: new Date(),
      participants: 0,
    };

    try {
      const token = await user.getIdToken();
      await axios.post("http://localhost:3000/challenges", body, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Challenge created");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to create challenge");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <h2 className="text-xl font-bold">Add New Challenge</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input name="title" required placeholder="Title" className="input w-full" />
        <input name="category" required placeholder="Category" className="input w-full" />
        <textarea name="description" required placeholder="Description" className="textarea w-full"></textarea>
        <div className="flex gap-2">
          <input name="duration" type="number" required placeholder="Duration (days)" className="input flex-1" />
          <input name="impactMetric" placeholder="Impact Metric (e.g. kg CO2)" className="input flex-1" />
        </div>
        <input name="target" placeholder="Target" className="input w-full" />
        <div className="flex gap-2">
          <input name="startDate" type="date" className="input" />
          <input name="endDate" type="date" className="input" />
        </div>
        <input name="imageUrl" placeholder="Image URL" className="input w-full" />
        <button
          disabled={loading}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white"
        >
          {loading ? "Saving..." : "Create Challenge"}
        </button>
      </form>
    </div>
  );
}