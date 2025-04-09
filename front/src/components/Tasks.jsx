import React from 'react';

export default function Tasks({ tasks, progress }) {
  return (
    <div>
      <h1 className="text-green-600 text-4xl font-bold text-center p-4">
        Rebusoppgaver
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-green-700 rounded shadow bg-green-800"
          >
            <h2 className="bg-green-700 px-2">{task.date}</h2>
            {task.task.map((item, counter) => (
              <p
                key={counter}
                className="text-green-200 px-2 wrap-break-word"
              >
                {item}
              </p>
            ))}
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
