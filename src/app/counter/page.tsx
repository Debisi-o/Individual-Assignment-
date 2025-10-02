"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState<string[]>([]);

  const increment = () => {
    setCount(prev => prev + step);
    setHistory(prev => [...prev, `Incremented by ${step} to ${count + step}`]);
  };

  const decrement = () => {
    setCount(prev => prev - step);
    setHistory(prev => [...prev, `Decremented by ${step} to ${count - step}`]);
  };

  const reset = () => {
    setCount(0);
    setHistory(prev => [...prev, "Counter reset to 0"]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Interactive Counter</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {/* Current Count Display */}
        <div className="text-center mb-8">
          <div className="text-6xl font-bold text-blue-600 mb-4">{count}</div>
          <p className="text-gray-600">Current Count</p>
        </div>

        {/* Step Size Control */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Step Size: {step}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>1</span>
            <span>10</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            -{step}
          </button>
          <button
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            +{step}
          </button>
        </div>

        {/* Conditional Rendering Based on Count */}
        {count > 0 && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Great! The counter is positive: {count}
          </div>
        )}
        
        {count < 0 && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            The counter is negative: {count}
          </div>
        )}
        
        {count === 0 && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
            The counter is at zero!
          </div>
        )}

        {/* History Section */}
        {history.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Action History</h3>
              <button
                onClick={clearHistory}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Clear History
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded max-h-40 overflow-y-auto">
              {history.slice(-5).reverse().map((action, index) => (
                <div key={index} className="text-sm text-gray-700 mb-1">
                  {action}
                </div>
              ))}
              {history.length > 5 && (
                <div className="text-sm text-gray-500 italic">
                  ... and {history.length - 5} more actions
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}