DROP DATABASE IF EXISTS annona;

CREATE DATABASE annona;

\c annona;

CREATE TABLE Citizens (
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
    name varchar(255),
    kind varchar(255),
    email varchar(255),
    zipcode int
);

CREATE TABLE Distributors (
    id serial primary key,
    name varchar(255),
    kind varchar(255),
    email varchar(255),
    zipcode int
);