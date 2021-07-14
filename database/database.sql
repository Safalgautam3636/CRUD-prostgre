CREATE DATABASE typescriptdatabase;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email TEXT
);
INSERT INTO users(name,email) VALUES ('safal','seeram3636@gmail.com'),('rahul','rahulratnasad@gmail.com');
CREATE TABLE auth(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email TEXT,
    password TEXT
);
INSERT INTO auth(name,email,password) VALUES ('safal','seeram3636@gmail.com','Pushpanjali12');