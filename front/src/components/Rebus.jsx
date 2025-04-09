import React, { useState, useEffect } from 'react';
import Explosion from 'react-canvas-confetti/dist/presets/explosion';

const NUM_WORDS = 8;

export default function Rebus({
  progress,
  setProgress,
  user,
  hoveredTask,
}) {
  const [answers, setAnswers] = useState([
    [0, 0, 0, 0, '', '', '', '', '', 0],
    [0, 0, 0, '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', 0, 0],
    [0, '', '', '', '', 0, 0, 0, 0, 0],
    ['', '', '', '', '', '', 0, 0, 0, 0],
    [0, '', '', '', '', '', '', 0, 0, 0],
    [0, 0, '', '', '', '', '', 0, 0, 0],
    [0, '', '', '', '', '', '', 0, 0, 0],
  ]);
  const [canAnimate, setCanAnimate] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [completed, setCompleted] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (progress.length) {
      let completedNew = [...completed];
      progress.forEach((word) => {
        completedNew[word.word_index] = getCompletedWordArray(
          word.word,
          word.word_index
        );
        // @ts-ignore
        /**
        completedNew[word.word_index] = answers[word.word_index];
        let newWord = word.word.split('');
        console.log(
          'completedNew',
          completedNew,
          answers[word.word_index]
        );
        if (completedNew[word.word_index]) {
          completedNew[word.word_index] = completedNew[
            word.word_index
            // @ts-ignore
          ].map((letter) => {
            console.log(newWord, letter);
            if (letter !== 0) {
              letter = newWord.shift();
            }
            return letter;
          });
        }
        **/
      });
      setCompleted(completedNew);
    }
  }, [progress]);

  // takes a word and returns an array of letters adjusted by the array used here
  const getCompletedWordArray = (word, wordIndex) => {
    let answerWordArray = answers[wordIndex];
    let newWordArray = word.split('');
    if (answerWordArray?.length > 0) {
      answerWordArray = answerWordArray.map((letter) => {
        if (letter !== 0) {
          letter = newWordArray.shift();
        }
        return letter;
      });
      return answerWordArray;
    }
    return false;
  };

  const handleChange = (wordIndex, value, letter) => {
    const updated = [...answers];
    updated[wordIndex][letter] = value;
    setAnswers(updated);

    validateRows(updated);
  };

  const validateRows = (updated) => {
    // find first full row not in completed
    updated.find((row, index) => {
      const word = row.join('');
      if (word.length === 10) {
        fetch('http://localhost:4000/submit-word', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            word: word.replaceAll('0', ''),
            wordIndex: index,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.correct) {
              // update completed

              const updatedProgress = [
                ...progress,
                {
                  word_index: index,
                  word: word.replaceAll('0', ''),
                },
              ];
              setProgress(updatedProgress);
              setCanAnimate((prev) => {
                const newCanAnimate = [...prev];
                newCanAnimate[index] = true;
                return newCanAnimate;
              });
            } else {
              alert('Feil, prøv igjen.');
              setAnswers((prevAnswers) => {
                const newAnswers = [...prevAnswers];
                newAnswers[index] = newAnswers[index].map((letter) =>
                  letter !== 0 ? '' : 0
                );
                return newAnswers;
              });
            }
          });
      }
    });
  };

  const handleSubmit = async (wordIndex) => {
    try {
      const response = await fetch(
        'http://localhost:4000/submit-word',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({
            wordIndex,
            word: answers[wordIndex],
          }),
        }
      );
      const data = await response.json();
      if (data.correct) {
        alert('Riktig!');
        const updated = [...answers];
        updated[wordIndex] = data.word; // Update with the validated word from the server
        setAnswers(updated);
        if (updated.every((a) => a)) setCompleted(true);
      } else {
        alert('Feil, prøv igjen.');
      }
    } catch (error) {
      console.error('Error submitting word:', error);
    }
  };

  const verticalWord = () => {
    let letters = '';
    for (let i = 0; i < NUM_WORDS; i++) {
      letters += answers[i]?.[0] || '_';
    }
    return letters;
  };

  console.log(hoveredTask);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        {answers.map((word, wordIndex) => {
          const isCompleted = completed[wordIndex];
          if (isCompleted) {
            word = isCompleted;
          }
          return (
            <div
              key={wordIndex}
              className={`${
                hoveredTask === wordIndex
                  ? 'scale-110 transition-all shadow brightness-160'
                  : ''
              } grid grid-cols-10`}
            >
              {canAnimate[wordIndex] && (
                <Explosion autorun={{ speed: 0.3, duration: 1000 }} />
              )}
              {word.map((letter, letterIndex) => (
                <input
                  className={`
                  ${
                    letter !== 0 &&
                    letterIndex !== 4 &&
                    !isCompleted &&
                    'bg-yellow-800 border-yellow-700 text-yellow-200'
                  }
                  ${letter === 0 ? 'bg-transparent border-0' : ''}
                  ${
                    letterIndex === 4 &&
                    'bg-yellow-400 border-yellow-800'
                  }
                    'bg-yellow-600 border-yellow-800'
                  ${isCompleted && letter !== 0 && 'bg-yellow-100 '}

                } w-full text-center border font-mono p-2 text-4xl uppercase`}
                  value={letter === 0 ? '' : letter}
                  key={letterIndex}
                  onChange={(e) =>
                    // limit to one character
                    handleChange(
                      wordIndex,
                      e.target.value.slice(-1), // change to last character in string
                      letterIndex
                    )
                  }
                  onBlur={(e) => {
                    e.target.value = e.target.value.slice(0, 1); // Limit to 10 characters
                  }}
                  disabled={letter === 0 || isCompleted || !user}
                  placeholder={letter === 0 ? ' ' : ''}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
