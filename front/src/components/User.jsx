import React from 'react';

// displays the user information and progress in the rebus
export const User = ({ user, progress }) => {
  return (
    <div className="flex flex-col gap-4 bg-green-800 p-2 rounded border border-green-700">
      <h2 className="text-4xl font-bold text-green-400">
        Sjallabais, {user.username}
      </h2>
      <h3 className="text-2xl text-green-400">Riktige gjettinger:</h3>
      <p className="bg-green-100 p-2 rounded">
        {' '}
        Du må løse dagens rebus på samme dag den blir lagt ut for å
        være med i trekning av dagspremien, som er kodekopp!
      </p>
      <ul className="flex flex-col gap-4 w-full">
        {progress.map((item) => (
          <li
            key={item.word_index}
            className="flex gap-2 items-center w-full justify-between bg-green-700 rounded p-2"
          >
            <div>
              <span className="font-bold text-green-300">
                {item.word_index + 1}:
              </span>{' '}
              <span className="text-green-100">{item.word}</span>{' '}
            </div>
            {item.isCorrectDate && (
              <span className="bg-green-400 rounded p-1 text-sm">
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
      </ul>
    </div>
  );
};
