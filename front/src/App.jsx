import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Rebus from './components/Rebus';
import { User } from './components/User';
import Tasks from './components/Tasks';

import StarfieldCanvas from './components/Starfield';

function App() {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [speed, setSpeed] = useState(0.5);
  const [hoveredTask, setHoveredTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksResponse = await fetch(
        'http://localhost:4000/tasks',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        }
      );
      const tasks = await tasksResponse.json();
      setTasks(tasks);
    };
    fetchTasks();
    const loginUser = async () => {
      const response = await fetch('http://localhost:4000/login', {
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
    const progressResponse = await fetch(
      'http://localhost:4000/progress',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      }
    );
    const progressData = await progressResponse.json();
    setProgress(progressData);
  };
  //console.log('hovered', hoveredTask);
  return (
    <div className="App p-8">
      <StarfieldCanvas speed={speed} />
      <div className="grid grid-cols-6 gap-8 max-w-6xl mx-auto relative">
        <h1 className="text-7xl uppercase relative col-span-6 text-yellow-200 font-bold text-center shadow-lg glow">
          🐣kode24s påskerebus🐣
        </h1>
        <p className="text-yellow-400 text-center col-span-6 mb-10">
          Levert, kodet, skrevet, og rebuset av de flinke folka i{' '}
          <a href="https://www.tomsconsult.no" className="underline">
            Toms Consult
          </a>
        </p>
        <div className="col-span-4">
          <Rebus
            progress={progress}
            setProgress={setProgress}
            hoveredTask={hoveredTask}
            user={user}
          />
        </div>
        <div className="col-span-2">
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
