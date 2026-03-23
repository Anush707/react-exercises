import React, { useState, useEffect } from 'react';

// TypeScript interface - defines what each cat object looks like
interface Cat {
  id: string;
  url: string;
}

export function CatGallery() {
  // 1. State to store ARRAY of cats (not just one image like dogs!)
  const [cats, setCats] = useState<Cat[]>([]);

  // 2. useEffect fetches 10 cats when page loads
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((response) => response.json())   // convert to JSON
      .then((data) => setCats(data))         // save array to state
      .catch((error) => console.error(error)); // handle errors
  }, []); // empty [] means run only once on load

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Cat Gallery</h2>

      {/* 3. CSS Grid layout - 3 columns on big screen, 1 column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 4. Loop through cats array and show each cat image */}
        {cats.map((cat) => (
          <img
            key={cat.id}          // unique key required by React
            src={cat.url}         // image URL from API
            alt="Cat"
            className="rounded-xl shadow-lg w-full h-64 object-cover"
          />
        ))}

      </div>

      {/* Show loading text while cats are being fetched */}
      {cats.length === 0 && <p>Loading cats...</p>}
    </div>
  );
}
