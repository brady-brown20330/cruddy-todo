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
  item TEXT NOT NULL,
  itemdescription TEXT NOT NULL,
  category TEXT NOT NULL,
  date_todo DATE NOT NULL,
  posting_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO todoitems(item, itemdescription, category, date_todo, posting_date)
VALUES('wax car', 'minivan needs a good shine', 'chores', '2021-01-10', CURRENT_TIMESTAMP);
/*

*/