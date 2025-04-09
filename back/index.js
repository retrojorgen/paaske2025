// ================= BACKEND: index.js =================
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./db');

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.post('/login', async (req, res) => {
  const id = req.cookies.user_id;
  if (id) {
    const user = await db.getUserFromUserId(id);
    if (user) {
      res.json(user);
      return;
    }
  }
  const { email, username } = req.body;
  if (!email || !username) {
    res
      .status(400)
      .json({ error: 'Email and username are required' });
    return;
  }
  const user = await db.getOrCreateUser(email, username);
  res.cookie('user_id', user.id, { httpOnly: true });
  res.json(user);
});

app.post('/loginfromuserid', async (req, res) => {
  const { userId } = req.body;
  const user = await db.getOrCreateUser(userId);
  res.cookie('user_id', user.id, { httpOnly: true });
  res.json(user);
});

const CORRECT_WORDS_DATES = [
  '2025-04-09',
  '2025-04-16',
  '2025-04-17',
  '2025-04-18',
  '2025-04-19',
  '2025-04-20',
  '2025-04-21',
  '2025-04-22',
];

// check if two date objects are the same day

const isSameDay = (date1, date2) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

app.get('/progress', async (req, res) => {
  const userId = req.cookies.user_id;
  const progress = await db.getUserProgress(userId);
  // check if the user has completed the word on the correct date
  // CURRENT_TIMESTAMP on the progress table must be the same date as the correct words dates
  // must compare and validate the dates against each other to see if they are the same date in the same year
  const progressWithDates = progress.map((item, index) => ({
    ...item,
    isCorrectDate: isSameDay(
      new Date(item.updated_at),
      new Date(CORRECT_WORDS_DATES[item.word_index])
    ),
    correctDate: CORRECT_WORDS_DATES[item.word_index],
  }));

  res.json(progressWithDates);
});

const tasks = [
  [
    'dette er en oppgave',
    'dette er neste linje',
    'dette er linje tre',
    'dette er linje 1',
  ],
  [
    'Kult tastatur, på artikkel nummer 80147043,',
    'men åssen blir dette et løsningsord?',
    'Jo, nå skar’ru se:',
    'Last ned overlay.png og smell det oppå det øverste, ',
    'så kan du sjælv skrive dagens burgerkjede.',
  ],
  [
    'dette er en oppgave',
    'dette er neste linje',
    'dette er linje tre',
    'dette er linje 4',
  ],
  [
    'Det ække så ofte dere skriver om hælvette, ',
    'men når dere gjør det, handler det om arbeidsmarkedet.',
    'Denna snutten på artikkelen bør gjøra suuusen,',
    'for å finne dagens ord til rebuuusen;',
    "[166,112,53,14].map(i=>document.querySelector('figcaption').textContent[i]).join('')",
  ],
  [
    'dette er en oppgave',
    'dette er neste linje',
    'dette er linje tre',
    'dette er linje 5',
  ],
  [
    'Kult at dere skrivi om jobbi.no,',
    'hak’ke fått lagt inn Tomsconsult der, enno.',
    'Men det er no rart i artikkelens kode, ',
    'og pilenes kode bør gi deg et navn i hodet.',
  ],
  [
    'dette er en oppgave',
    'dette er neste linje',
    'dette er linje tre',
    'dette er linje 7',
  ],
  [
    'Hvis du brukær ordet “del” i språket fra artikkel nummer 8280721-fiiire,',
    'og vil utbasunere hva du har gjort, helt uten å fliiire:',
    '“Sånn, nå er den X-X-X-X-X-X!”,',
    'har du også dagens kode, you betch’a!',
  ],
];
// takes a date and check if the date is after the current day
const checkifDateisAfterTodaysDay = (contentDate) => {
  const today = new Date();

  // Strip time portion by setting time to midnight
  contentDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  return contentDate <= today;
};

app.get('/tasks', (req, res) => {
  const tasksThatAreNotBeyoonendToday = tasks.filter(
    (task, index) => {
      return checkifDateisAfterTodaysDay(
        new Date(CORRECT_WORDS_DATES[index])
      ); // Assuming task[0] is the date
    }
  );

  res.json(
    tasksThatAreNotBeyoonendToday.map((task, index) => ({
      task: task,
      date: CORRECT_WORDS_DATES[index],
    }))
  );
});

app.post('/submit-word', async (req, res) => {
  const { wordIndex, word } = req.body;
  const userId = req.cookies.user_id;
  const correct = await db.checkAndSaveWord(userId, wordIndex, word);
  const progressItem = await db.getUserProgressItem(
    userId,
    wordIndex
  );
  if (!correct) {
    res.status(400).json({ correct: false });
    return;
  } else {
    res.json({
      ...progressItem,
      correct: true,
      isCorrectDate: isSameDay(
        new Date(progressItem.updated_at),
        new Date(CORRECT_WORDS_DATES[progressItem.word_index])
      ),
    });
  }
});

// host html content from public folder
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(4000, () => console.log('Server running on '));
