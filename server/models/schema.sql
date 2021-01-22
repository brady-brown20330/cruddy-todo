/*
schema tables:

todoitems
  rows:
  item
  description
  category
  todo time
  time added
*/

DROP DATABASE IF EXISTS tododatabase;

CREATE DATABASE tododatabase;

\c tododatabase;

CREATE TABLE IF NOT EXISTS todoitems (
  id SERIAL PRIMARY KEY,
  todo TEXT NOT NULL,
  posting_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed BOOLEAN
);

INSERT INTO todoitems(todo, posting_date, completed)
VALUES('wax car', CURRENT_TIMESTAMP, false);
/*

*/