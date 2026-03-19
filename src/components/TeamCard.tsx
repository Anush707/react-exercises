import { useState } from 'react';

// 1. TypeScript Interface - defines what props this component needs
interface CardProps {
  name: string;
  role: string;
}

// 2. Component that receives name and role as props
export function TeamCard({ name, role }: CardProps) {

  // 3. useState for votes, starting at 0
  const [votes, setVotes] = useState(0);

  return (
    // 4. Card styled with Tailwind CSS
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm border border-gray-200 text-center w-48">
      
      {/* 5. Show the props received from App.tsx */}
      <h2 className="text-xl font-bold text-slate-800">{name}</h2>
      <p className="text-slate-500 text-sm font-medium mb-4">{role}</p>

      {/* 6. Button that adds 1 to votes when clicked */}
      <button
        onClick={() => setVotes((prev) => prev + 1)}
        className="w-full bg-indigo-600 text-white font-bold py-2 rounded-xl hover:bg-indigo-700 transition-colors"
      >
        Vote ({votes})
      </button>
    </div>
  );
}
