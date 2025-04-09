import React, { useState } from 'react';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    fetch(`${apiBaseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, username }),
    })
      .then((res) => res.json())
      .then((user) => onLogin(user));
  };

  return (
    <div className="flex flex-col gap-2 border border-yellow-700 rounded p-4">
      <h2 className="text-2xl font-bold text-yellow-400 text-center">
        Logg inn / lag bruker <br />
        for å delta!
      </h2>
      <input
        placeholder="E-post"
        value={email}
        className="bg-yellow-800 text-yellow-400 px-4 py-2 rounded text-xl"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Brukernavn"
        value={username}
        className="bg-yellow-800 px-4 text-yellow-400 py-2 rounded text-xl"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="border border-yellow-600 text-yellow-600 px-4 py-2 rounded text-xl hover:bg-yellow-700 hover:text-yellow-300 cursor-pointer"
      >
        Start konkurranse
      </button>
    </div>
  );
}
