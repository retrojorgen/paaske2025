import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, username }),
    })
      .then((res) => res.json())
      .then((user) => onLogin(user));
  };

  return (
    <div className="flex flex-col gap-2 border border-green-700 rounded p-4">
      <h2 className="text-2xl font-bold text-green-400">
        Logg inn for å delta!
      </h2>
      <input
        placeholder="E-post"
        value={email}
        className="bg-green-800 text-green-400 px-4 py-2 rounded text-xl"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Brukernavn"
        value={username}
        className="bg-green-800 px-4 text-green-400 py-2 rounded text-xl"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="border border-green-600 text-green-600 px-4 py-2 rounded text-xl hover:bg-green-700 hover:text-green-300 cursor-pointer"
      >
        Start konkurranse
      </button>
    </div>
  );
}
