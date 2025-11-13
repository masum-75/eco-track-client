import React, { useEffect, useState } from "react";
import ChallengeCard from "../../components/ChallengeCard";
import TipCard from "../../components/TipCard";
import EventCard from "../../components/EventCard";

export default function Home() {
  const [homeData, setHomeData] = useState({ challenges: [], tips: [], events: [], stats: {} });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE || "http://localhost:3000/home"}`)
      .then(res => res.json())
      .then(data => setHomeData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-2xl font-bold">Featured Challenges</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {homeData.challenges.map(c => <ChallengeCard key={c._id} challenge={c} />)}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold">Why Go Green?</h3>
          <ul className="list-disc ml-5 mt-3 text-gray-700">
            <li>Lower costs through energy saving</li>
            <li>Cleaner air and healthier environment</li>
            <li>Community-driven measurable impact</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold">How It Works</h3>
            <ol className="list-decimal ml-6 mt-2 text-gray-700">
              <li>Join a challenge</li>
              <li>Track your progress</li>
              <li>Share tips with the community</li>
            </ol>
          </div>
        </div>

        <aside>
          <div>
            <h4 className="font-semibold">Latest Tips</h4>
            <div className="mt-3 space-y-2">
              {homeData.tips.map(t => <TipCard key={t._id} tip={t} />)}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Upcoming Events</h4>
            <div className="mt-3 space-y-2">
              {homeData.events.map(e => <EventCard key={e._id} event={e} />)}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}