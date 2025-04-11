import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Rebus from './components/Rebus';
import { User } from './components/User';
import Tasks from './components/Tasks';

import StarfieldCanvas from './components/Starfield';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [speed, setSpeed] = useState(0.5);
  const [hoveredTask, setHoveredTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksResponse = await fetch(`${apiBaseUrl}/tasks`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const tasks = await tasksResponse.json();
      setTasks(tasks);
    };
    fetchTasks();
    const loginUser = async () => {
      const response = await fetch(`${apiBaseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const user = await response.json();

      if (user && response.ok) {
        setLoggedInUser(user);
      }
    };
    loginUser();
  }, []);

  const setLoggedInUser = async (user) => {
    setUser(user);
    const progressResponse = await fetch(`${apiBaseUrl}/progress`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    const progressData = await progressResponse.json();
    setProgress(progressData);
  };
  //console.log('hovered', hoveredTask);
  return (
    <div className="App p-2 lg:p-8">
      <StarfieldCanvas speed={speed} />
      <div className="grid grid-cols-6 gap-4 lg:gap-8 max-w-6xl mx-auto relative">
        <div className="col-span-6">
        <h1 className="text-4xl lg:text-7xl uppercase relative col-span-6 text-yellow-200 font-bold text-center shadow-lg glow mb-6">
          🐣kode24s påskerebus🐣
        </h1>
        <p className="text-teal-400 text-center col-span-6 mb-2">
          Årets rebus er sponset av Capgemini, besøk <a href="https://partner.kode24.no/capgemini" className="underline">partnersiden deres</a> og utforsk deres <a href="https://partner.kode24.no/capgemini" className="underline">ledige stillinger</a>
        </p>
        <p className="text-yellow-400 text-center col-span-6 mb-4 lg:mb-10">
          Levert, kodet, skrevet, og rebuset av de flinke folka i{' '}
          <a href="https://www.tomsconsult.no" className="underline">
            Toms Consult
          </a>
        </p>
        </div>
        <div className="col-span-6 lg:col-span-4">
          <Rebus
            progress={progress}
            setProgress={setProgress}
            hoveredTask={hoveredTask}
            user={user}
            tasks={tasks}
          />
        </div>
        <div className="col-span-6 lg:col-span-2">
          {user ? (
            <User
              user={user}
              progress={progress}
              setHoveredTask={setHoveredTask}
            />
          ) : (
            <Login onLogin={setLoggedInUser} />
          )}
        </div>
        <div className="col-span-6">
          <Tasks
            tasks={tasks}
            progress={progress}
            setHoveredTask={setHoveredTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
