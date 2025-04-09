import React from 'react';

export default function Tasks({ tasks, progress, setHoveredTask }) {
  return (
    <div>
      <h1 className="text-yellow-400 text-4xl font-bold text-center p-4">
        Rebusoppgaver
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="border border-yellow-700 rounded shadow bg-yellow-800 hover:brightness-120 hover:scale-105 transition-all"
            onMouseEnter={() => setHoveredTask(index)}
            onMouseLeave={() => setHoveredTask(null)}
          >
            <h2 className="bg-yellow-400 p-2">{task.date}</h2>
            <div className="p-2">
              {task.task.map((item, counter) => (
                <p
                  key={counter}
                  className="text-yellow-200 wrap-break-word"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
        {tasks.length < 8 && (
          <div className="border border-teal-700 rounded shadow bg-teal-800">
            <h2 className="bg-teal-700 px-2">KOMMER I MORGEN</h2>
            <p className="text-teal-200 px-2 wrap-break-word">
              Neste oppgave kommer i morgen. Husk å svare på oppgaven
              på samme dag for å være med i trekningen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
