'use client';

import { useState, useEffect, useRef } from 'react';

type TimerState = 'ready' | 'running' | 'paused' | 'completed';

export default function CountdownTimer() {
  const [state, setState] = useState<TimerState>('ready');
  const [duration, setDuration] = useState(2); // minutes
  const [warningThreshold, setWarningThreshold] = useState(1); // minutes
  const [remainingTime, setRemainingTime] = useState(0); // seconds
  const [buttonLabel, setButtonLabel] = useState('Start');
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Convert minutes to seconds
  const totalSeconds = duration * 60;
  const warningSeconds = warningThreshold * 60;

  // Calculate remaining time percentage for outer circle
  const progressPercentage = remainingTime > 0 ? (remainingTime / totalSeconds) * 100 : 0;
  
  // Determine outer circle color based on threshold
  const outerCircleColor = remainingTime <= warningSeconds ? '#ef4444' : '#1e40af'; // red or dark blue

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Start countdown
  const startTimer = () => {
    if (state === 'ready') {
      setRemainingTime(totalSeconds);
      setState('running');
      setButtonLabel('Pause');
    } else if (state === 'paused') {
      setState('running');
      setButtonLabel('Pause');
    }
  };

  // Pause countdown
  const pauseTimer = () => {
    setState('paused');
    setButtonLabel('Resume');
  };

  // Handle button click
  const handleButtonClick = () => {
    if (state === 'ready' || state === 'paused') {
      startTimer();
    } else if (state === 'running') {
      pauseTimer();
    }
  };

  // Reset timer
  const resetTimer = () => {
    setState('ready');
    setRemainingTime(totalSeconds);
    setButtonLabel('Start');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Timer effect
  useEffect(() => {
    if (state === 'running' && remainingTime > 0) {
      intervalRef.current = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            setState('completed');
            setButtonLabel('Completed');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [state, remainingTime]);

  // Reset timer when duration changes
  useEffect(() => {
    if (state === 'ready') {
      setRemainingTime(0);
    }
  }, [duration, state]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Countdown Timer
        </h1>

        {/* Input Fields */}
        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration (minutes)
            </label>
            <input
              type="number"
              min="1"
              max="60"
              value={duration}
              onChange={(e) => setDuration(Math.max(1, parseInt(e.target.value) || 1))}
              disabled={state !== 'ready'}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Warning Threshold (minutes)
            </label>
            <input
              type="number"
              min="1"
              max={duration}
              value={warningThreshold}
              onChange={(e) => setWarningThreshold(Math.max(1, Math.min(parseInt(e.target.value) || 1, duration)))}
              disabled={state !== 'ready'}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
        </div>

        {/* Visual Timer */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Outer Circle - Progress Ring */}
            <svg width="200" height="200" className="transform -rotate-90">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="18"
                className="opacity-30"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke={outerCircleColor}
                strokeWidth="18"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 90}`}
                strokeDashoffset={`${2 * Math.PI * 90 * (1 - progressPercentage / 100)}`}
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
            
            {/* Inner Circle - Time Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {formatTime(remainingTime)}
                  </div>
                  <div className="text-sm text-gray-600">
                    {state === 'completed' ? 'Done!' : 'remaining'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleButtonClick}
            disabled={state === 'completed'}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              state === 'completed'
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : state === 'running'
                ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {buttonLabel}
          </button>
          
          <button
            onClick={resetTimer}
            disabled={state === 'ready'}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
              state === 'ready'
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-600 hover:bg-gray-700 text-white'
            }`}
          >
            Reset
          </button>
        </div>

        {/* State Indicator */}
        <div className="mt-6 text-center">
          <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            state === 'ready' ? 'bg-gray-100 text-gray-800' :
            state === 'running' ? 'bg-green-100 text-green-800' :
            state === 'paused' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            State: {state.charAt(0).toUpperCase() + state.slice(1)}
          </div>
        </div>
      </div>
    </div>
  );
}
