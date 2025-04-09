const { Pool } = require('pg');
const pool = new Pool({
  connectionString:
    'postgres://kode24_paaske_2024_admin:x7jY3MA3dE4t60VxKSmP2h2WXrOqe8WC@dpg-cnlev3q1hbls739428kg-a.frankfurt-postgres.render.com/kode24_paaske_2024',
  ssl: {
    rejectUnauthorized: false,
  },
});

const CORRECT_WORDS = [
  'dynga',
  'barrybs',
  'downtown',
  'ælva',
  'kjerka',
  'konami',
  'datan',
  'sletta',
];

module.exports = {
  getOrCreateUser: async (email, username) => {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    if (result.rows.length > 0) return result.rows[0];
    const insert = await pool.query(
      'INSERT INTO users (email, username) VALUES ($1, $2) RETURNING *',
      [email, username]
    );
    return insert.rows[0];
  },

  getUserFromUserId: async (userId) => {
    const result = await pool.query(
      'SELECT * FROM users WHERE id = $1',
      [userId]
    );
    if (result.rows.length > 0) return result.rows[0];
    return null;
  },

  getUserProgress: async (userId) => {
    const result = await pool.query(
      'SELECT * FROM progress WHERE user_id = $1',
      [userId]
    );
    return result.rows;
  },

  checkAndSaveWord: async (userId, index, word) => {
    if (word.toLowerCase() === CORRECT_WORDS[index].toLowerCase()) {
      await pool.query(
        `INSERT INTO progress (user_id, word_index, word)
        VALUES ($1, $2, $3)
        ON CONFLICT (user_id, word_index) DO NOTHING`,
        [userId, index, word]
      );
      return true;
    }
    return false;
  },
};
