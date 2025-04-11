// ================= BACKEND: index.js =================
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./db');
const rateLimit = require('express-rate-limit');
const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

const globalLimiter = rateLimit.rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(globalLimiter);

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
  '2025-04-15',
  '2025-04-16',
  '2025-04-17',
  '2025-04-18',
  '2025-04-19',
  '2025-04-20',
  '2025-04-21',
  '2025-04-22',
];
/**

const CORRECT_WORDS_DATES = [
  '2025-04-11',
  '2024-04-16',
  '2024-04-17',
  '2024-04-18',
  '2024-04-19',
  '2024-04-20',
  '2024-04-21',
  '2024-04-22',
];
*/

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
    'Partnerær det trenger vi alle og en hver,',
    'og kode24 har en partnerside, har du vært der? ',
    'Inspiser sida til dem som i navnet blandær hodeplagg og stjernetegn,',
    'da finner du en kylling som gjemmer et lite tegn.',
  ],
  [
    'Kult tastatur, på artikkel nummer 80147043,',
    'men åssen blir dette et løsningsord?',
    'Jo, nå skar’ru se:',
    'Last ned overlay.png og smell det oppå det øverste,',
    'så kan du sjælv skrive dagens burgerkjede.',
  ],
  [
    '20 års erfaring, fire års utdanning?',
    'Hvordan skal vi få dette ordet til å si pling?',
    'Kanskje er du frilans, kanskje fra Troms?',
    'Kanskje er du Cloud / Devops-person? Kanskje er du boms?',
    'La oss si du er junior i tilegg, og trenger oversikt.',
    'stikk til kalkulatoren og stapp inn data, så får du kodeord og lønnstatistikk.',
  ],
  [
    'Det ække så ofte dere skriver om hælvette,',
    'men når dere gjør det, handler det om arbeidsmarkedet.',
    'Denna snutten på artikkelen bør gjøra suuusen,',
    'for å finne dagens ord til rebuuusen:',
    "[166,112,53,14].map(i=>document.querySelector('figcaption').textContent[i]).join('')",
  ],
  [
    'Harru titta litt under panseret på kode24?',
    'og kanskje funni hesten som får deg til å humre og flire?',
    'visteru at det også finnes en annen figur,',
    'på samme stedet, som bor i et bur.',
    'og har du tur, skikkelig flakse flaks',
    'får du et kodeord straks!',
  ],
  [
    'Kult at dere har skrivi om jobbi.no,',
    'hak’ke fått lagt inn Tomsconsult der, enno.',
    'Men det er no rart i artikkelens kode,',
    'og pilenes kode bør gi deg et navn i hodet.',
  ],
  [
    'Stiling er på ei måte nettsidas klær,',
    'og kode24 har mange, for alle og en hver.',
    'Så titt litt på stilene, og let helt til kilden, skikkelig deep,',
    'så finner du en liten kylling som sier kodeordet med et piip.',
  ],
  [
    'Hvis du skriver “del” i språket fra artikkel nummer 8280721-fiiire,',
    'og vil utbasunere hva du har gjort, helt uten å fliiire:',
    '“Sånn, nå er den X-X-X-X-X-A!”,',
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

app.get('/todays-task', async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Strip time portion for comparison

  // Find the index of the current date in CORRECT_WORDS_DATES
  const currentIndex = CORRECT_WORDS_DATES.findIndex((date) => {
    const correctDate = new Date(date);
    correctDate.setHours(0, 0, 0, 0); // Strip time portion for comparison
    return correctDate.getTime() === today.getTime();
  });

  if (currentIndex === -1) {
    // No matching date found
    res.status(404).json({ error: 'No task for today' });
    return;
  }
  // Fetch the task corresponding to the current index
  const currentTask = tasks[currentIndex];

  // Fetch all progress records for the current word index from the database
  console.log('current index', currentIndex);

  const progress = await await db.getProgressByWordIndex(
    currentIndex
  );
  res.json({
    task: currentTask,
    date: CORRECT_WORDS_DATES[currentIndex],
    progress: progress,
  });
});

// host html content from public folder
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(4000, () => console.log('Server running on '));
