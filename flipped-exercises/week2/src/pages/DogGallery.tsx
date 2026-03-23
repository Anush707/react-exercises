import React, { useState, useEffect } from 'react';

export function DogGallery() {
  // 1. State to store the URL of the dog image
  const [dogUrl, setDogUrl] = useState('');

  // 2. useEffect runs only once when the page loads (empty array [] means run once)
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random') // fetch from internet
      .then((response) => response.json())           // convert to JSON
      .then((data) => setDogUrl(data.message))       // save image URL to state
      .catch((error) => console.error(error));       // handle errors
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Random Dog</h2>
      {/* 3. Show image only when URL exists, otherwise show Loading text */}
      {dogUrl ? (
        <img src={dogUrl} alt="Dog" className="rounded-xl shadow-lg w-64 h-64 object-cover" />
      ) : (
        <p>Loading dog...</p>
      )}
    </div>
  );
}
