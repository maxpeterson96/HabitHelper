DROP DATABASE IF EXISTS habit_helper;

CREATE DATABASE habit_helper;

USE habit_helper;

CREATE TABLE IF NOT EXISTS habits (
  id SERIAL PRIMARY KEY,
  habit TEXT,
  message TEXT,
  time BIGINT,
  frequency Text
)
