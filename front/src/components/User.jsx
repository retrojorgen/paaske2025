import React from 'react';

// displays the user information and progress in the rebus
export const User = ({ user, progress, setHoveredTask }) => {
  return (
    <div className="flex flex-col gap-4 bg-yellow-800 p-2 rounded border border-yellow-700">
      <h2 className="text-4xl font-bold text-yellow-400">
        Sjallabais, {user.username}
      </h2>
      <h3 className="text-2xl text-yellow-400">
        Riktige gjettinger:
      </h3>
      <p className="bg-yellow-100 p-2 rounded">
        {' '}
        Du må løse dagens rebus på samme dag den blir lagt ut for å
        være med i trekning av dagspremien, som er kodekopp!
      </p>
      <ul className="flex flex-col gap-4 w-full">
        {progress.map((item) => (
          <li
            key={item.word_index}
            className="flex gap-2 items-center w-full justify-between bg-yellow-700 rounded p-2 hover:brightness-120 hover:scale-105 transition-all"
            onMouseEnter={() => setHoveredTask(item.word_index)}
            onMouseLeave={() => setHoveredTask(null)}
          >
            <div>
              <span className="font-bold text-yellow-300">
                {item.word_index + 1}:
              </span>{' '}
              <span className="text-yellow-100">{item.word}</span>{' '}
            </div>
            {item.isCorrectDate && (
              <span className="bg-yellow-400 rounded p-1 text-sm">
                Med i trekning
              </span>
            )}

            {!item.isCorrectDate && (
              <span className="bg-red-400 rounded p-1 text-sm">
                Svarte for seint
              </span>
            )}
          </li>
        ))}
        {progress.length === 8 &&
          progress.filter((item) => item.isCorrectDate).length ===
            progress.length && (
            <p className="bg-yellow-100 p-2 rounded">
              {' '}
              Du har løst alle oppgavene innenfor tidsfristen!
              Gratulerer! Du er med i trekning av hovedpremien.
            </p>
          )}
        {progress.length === 8 &&
          progress.filter((item) => item.isCorrectDate).length !==
            progress.length && (
            <p className="bg-red-100 p-2 rounded">
              {' '}
              Du har løst alle oppgavene! Gratulerer! Men du har
              dessverre ikke løst alle innenfor tidsfristen, så du er
              ikke med i hovedpremie-trekkingen.
            </p>
          )}
      </ul>
    </div>
  );
};
