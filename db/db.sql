CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  username TEXT NOT NULL
);

CREATE TABLE progress (
  user_id INTEGER REFERENCES users(id),
  word_index INTEGER,
  word TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Add timestamp column
  PRIMARY KEY(user_id, word_index)
);


/**
-- Add a new column 'updated_at' to the 'progress' table
ALTER TABLE progress
ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- Update existing rows to set the 'updated_at' column to the current timestamp
UPDATE progress
SET updated_at = CURRENT_TIMESTAMP;
**/