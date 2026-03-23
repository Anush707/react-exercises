import React from 'react';
import { Profile } from './components/Profile';
import { TeamCard } from './components/TeamCard';

export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      
      {/* Your profile card from Part 1 */}
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>
      <Profile name="Anush Gotame" role="Junior Developer" />

      {/* Three TeamCard components side by side */}
      <div className="flex gap-4 mt-8">
        <TeamCard name="pekka" role="Son" />
        <TeamCard name="matti" role="Father" />
        <TeamCard name="Saaraa" role="Mother" />
      </div>

    </div>
  );
}

