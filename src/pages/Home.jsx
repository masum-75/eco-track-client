import React, { useEffect, useState } from "react";
import axios from "axios";
import ChallengeCard from "../components/ChallengeCard";
import TipCard from "../components/TipCard";
import EventCard from "../components/EventCard";

export default function Home() {
  const [homeData, setHomeData] = useState({ challenges: [], tips: [], events: [], stats: {} });

  useEffect(() => {
    axios
      .get("http://localhost:3000/home")
      .then(res => setHomeData(res.data))
      .catch(err => console.error("Error loading home data:", err));
  }, []);

  return (
    <div className="grid gap-12">

  {/* Featured Challenges */}
  <section>
    <h2 className="text-3xl font-bold tracking-tight mb-6">Featured Challenges</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {homeData.challenges.map(c => (
        <ChallengeCard key={c._id} challenge={c} />
      ))}
    </div>
  </section>

  {/* Info + Tips + Events */}
  <section className="grid md:grid-cols-3 gap-10 items-start">

    {/* Left Side: Why Go Green + How It Works */}
    <div className="md:col-span-2 space-y-10">

      {/* Why Go Green */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight">Why Go Green?</h3>
        <ul className="list-disc ml-6 mt-4 text-gray-700 leading-relaxed space-y-1">
          <li>Lower costs through effective energy saving</li>
          <li>Cleaner air and a healthier environment</li>
          <li>Community-driven actions with measurable impact</li>
        </ul>
      </div>

      {/* How It Works */}
      <div>
        <h3 className="text-2xl font-semibold tracking-tight">How It Works</h3>
        <ol className="list-decimal ml-6 mt-4 text-gray-700 leading-relaxed space-y-1">
          <li>Join a challenge</li>
          <li>Track your progress effortlessly</li>
          <li>Share helpful tips with the community</li>
        </ol>
      </div>
    </div>

    {/* Sidebar: Tips + Events */}
    <aside className="space-y-10">

      {/* Latest Tips */}
      <div>
        <h4 className="text-xl font-semibold tracking-tight">Latest Tips</h4>
        <div className="mt-4 space-y-4">
          {homeData.tips.map(t => (
            <TipCard key={t._id} tip={t} />
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h4 className="text-xl font-semibold tracking-tight">Upcoming Events</h4>
        <div className="mt-4 space-y-4">
          {homeData.events.map(e => (
            <EventCard key={e._id} event={e} />
          ))}
        </div>
      </div>

    </aside>

  </section>
</div>

  );
}