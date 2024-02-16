"use client";
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  // Fetch the current count on component mount
  useEffect(() => {
    const fetchCount = async () => {
      const res = await fetch('/api/click', { method: 'GET' });
      const data = await res.json();
      setCount(data.count);
    };
    fetchCount();
  }, [count]);

  // Function to handle click: increment and update the count
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    fetch('/api/click', { method: 'POST' });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <header className="flex items-center justify-center mb-12 text-white">
        <h1 className="text-4xl font-bold tracking-wide">🚀 Click Cosmos! 🌌</h1>
      </header>
      <main className="flex flex-col items-center">
        <h2 className="text-9xl font-bold text-yellow-300 mb-4 animate-bounce">{count}</h2>
        <p className="text-3xl font-semibold text-white mb-8">Have you clicked today? Let's go! 🌠</p>
        <button
          className="bg-yellow-500 text-black font-bold text-xl px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transform transition duration-500 hover:scale-110"
          onClick={handleClick}
        >
          Click Here! ✨
        </button>
      </main>
      <footer className="flex justify-between items-center w-full max-w-2xl mt-12 text-white">
        <span className="text-xl">Total Clicks: 12,785 🌍</span>
        <span className="text-xl">Your Clicks: 584 👾</span>
      </footer>
    </div>
  );
}
