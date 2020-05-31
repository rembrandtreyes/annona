DROP DATABASE IF EXISTS nofoodleftbehind;

CREATE DATABASE nofoodleftbehind;

\c nofoodleftbehind;

CREATE TABLE Users (
    id serial primary key,
    email varchar(255),
    username varchar(255),
    kind varchar(255)
);

CREATE TABLE Tag (
    id serial primary key
);

CREATE TABLE Providers (
    id serial primary key,
    kind varchar(255),
    name varchar(255),
    zipcode int
);

CREATE TABLE Distributors (
    id serial primary key,
    kind varchar(255)
);