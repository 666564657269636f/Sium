CREATE DATABASE IF NOT EXISTS MilitaryManager;

USE MilitaryManager;

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS Subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS Status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    subject_id INT NOT NULL,
    mark INT NOT NULL,
    cfu INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES Subjects(id) ON DELETE CASCADE
);


INSERT INTO Users (name, surname, email)
VALUES
    ('Luca', 'Rossi', 'luca.rossi@example.com'),
    ('Maria', 'Verdi', 'maria.verdi@example.com'),
    ('Giulia', 'Bianchi', 'giulia.bianchi@example.com'),
    ('Marco', 'Neri', 'marco.neri@example.com');

INSERT INTO Subjects (name)
VALUES
    ('Matematica'),
    ('Fisica'),
    ('Informatica'),
    ('Chimica');

INSERT INTO Status (user_id, subject_id, mark, cfu)
VALUES
    (1, 1, 30, 12),
    (1, 2, 28, 6),
    (2, 1, 25, 12),
    (2, 3, 29, 9),
    (3, 4, 30, 6),
    (4, 2, 18, 6),
    (4, 3, 24, 9);