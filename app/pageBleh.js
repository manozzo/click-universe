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
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
            <header className="mb-12">
                <h1 className="text-3xl font-semibold text-gray-700">Click Universe 🌟</h1>
            </header>
            <main className="flex flex-col items-center">
                <h2 className="text-8xl font-bold text-blue-600 mb-4">{count}</h2>
                <p className="text-xl font-medium text-gray-600 mb-8">Your click makes a difference!</p>
                <button
                    className="bg-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                    onClick={handleClick}
                >
                    Click Here
                </button>
            </main>
            <footer className="flex justify-between items-center w-full mt-12 text-sm text-gray-500">
                <span>Total Clicks: 12,785</span>
                <span>Your Clicks: 584</span>
            </footer>
        </div>
    );
}
