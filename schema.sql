CREATE DATABASE IF NOT EXISTS MilitaryManager;

USE MilitaryManager;

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    course VARCHAR(255) NOT NULL,                         
    department ENUM('Tramot', 'Ing') NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    phone VARCHAR(20) NOT NULL,                           
    address VARCHAR(255) NOT NULL,                                
    password VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL        
);

CREATE TABLE IF NOT EXISTS Subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    cfu INT NOT NULL
);

CREATE TABLE IF NOT EXISTS Grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    subject_id INT NOT NULL,
    mark INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (subject_id) REFERENCES Subjects(id) ON DELETE CASCADE,
    CONSTRAINT unique_user_subject UNIQUE (user_id, subject_id)
);

CREATE TABLE IF NOT EXISTS Curriculums (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    filename VARCHAR(255) UNIQUE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
)

INSERT INTO Users (name, surname, email, course, department, is_admin, phone, address, password, username)
VALUES
    ('Luca', 'Rossi', 'luca.rossi@example.com', 'Ingegneria Informatica', 'Ing', TRUE, '3451234567', 'Via Roma 10, Milano', 'admin123', 'lrossi'),
    ('Maria', 'Verdi', 'maria.verdi@example.com', 'Lettere', 'Tramot', FALSE, '3472345678', 'Via Milano 20, Torino', 'maria123', 'mverdi'),
    ('Giulia', 'Bianchi', 'giulia.bianchi@example.com', 'Ingegneria Meccanica', 'Ing', FALSE, '3493456789', 'Via Napoli 30, Napoli', 'giulia123', 'gbianchi'),
    ('Marco', 'Neri', 'marco.neri@example.com', 'Storia', 'Tramot', FALSE, '3404567890', 'Via Firenze 40, Firenze', 'marco123', 'mneri'),
    ('Laura', 'Gialli', 'laura.gialli@example.com', 'Fisica', 'Tramot', FALSE, '3415678901', 'Via Palermo 50, Palermo', 'laura123', 'lgialli'),
    ('Davide', 'Blu', 'davide.blu@example.com', 'Ingegneria Elettronica', 'Ing', FALSE, '3426789012', 'Via Bologna 60, Bologna', 'davide123', 'dblu'),
    ('Chiara', 'Rosa', 'chiara.rosa@example.com', 'Matematica', 'Tramot', FALSE, '3437890123', 'Via Bari 70, Bari', 'chiara123', 'crosa'),
    ('Simone', 'Argento', 'simone.argento@example.com', 'Ingegneria Gestionale', 'Ing', FALSE, '3448901234', 'Via Cagliari 80, Cagliari', 'simone123', 'sargento'),
    ('Elena', 'Bronzo', 'elena.bronzo@example.com', 'Lingue', 'Tramot', FALSE, '3459012345', 'Via Venezia 90, Venezia', 'elena123', 'ebronzo'),
    ('Federico', 'Nero', 'federico.nero@example.com', 'Economia', 'Tramot', FALSE, '3460123456', 'Via Pisa 100, Pisa', 'federico123', 'fnero'),
    ('Sara', 'Marrone', 'sara.marrone@example.com', 'Ingegneria Civile', 'Ing', FALSE, '3471234567', 'Via Siena 110, Siena', 'sara123', 'smarrone'),
    ('Andrea', 'Viola', 'andrea.viola@example.com', 'Filosofia', 'Tramot', FALSE, '3482345678', 'Via Lecce 120, Lecce', 'andrea123', 'aviola'),
    ('Paola', 'Verde', 'paola.verde@example.com', 'Psicologia', 'Tramot', FALSE, '3493456789', 'Via Trento 130, Trento', 'paola123', 'pverde'),
    ('Francesco', 'Azzurro', 'francesco.azzurro@example.com', 'Ingegneria Biomedica', 'Ing', FALSE, '3504567890', 'Via Bolzano 140, Bolzano', 'francesco123', 'fazzurro'),
    ('Alessia', 'Oro', 'alessia.oro@example.com', 'Lettere Moderne', 'Tramot', FALSE, '3515678901', 'Via Perugia 150, Perugia', 'alessia123', 'aoro'),
    ('Mattia', 'Corallo', 'mattia.corallo@example.com', 'Ingegneria Energetica', 'Ing', FALSE, '3526789012', 'Via Aosta 160, Aosta', 'mattia123', 'mcorallo'),
    ('Beatrice', 'Limone', 'beatrice.limone@example.com', 'Scienze Politiche', 'Tramot', FALSE, '3537890123', 'Via Lodi 170, Lodi', 'beatrice123', 'blimone'),
    ('Giorgio', 'Cielo', 'giorgio.cielo@example.com', 'Chimica', 'Tramot', FALSE, '3548901234', 'Via Como 180, Como', 'giorgio123', 'gcielo'),
    ('Irene', 'Fumo', 'irene.fumo@example.com', 'Giurisprudenza', 'Tramot', FALSE, '3559012345', 'Via Ravenna 190, Ravenna', 'irene123', 'ifumo'),
    ('Stefano', 'Luce', 'stefano.luce@example.com', 'Ingegneria Ambientale', 'Ing', FALSE, '3560123456', 'Via Latina 200, Latina', 'stefano123', 'sluce');


INSERT INTO Subjects (name, cfu)
VALUES
    ('Analisi', 12),
    ('Fisica', 9),
    ('Fondamenti di Informatica I', 9),
    ('Chimica', 6),
    ('Inglese', 3),
    ('Statistica', 6),
    ('Elettronica', 9);

INSERT INTO Grades (user_id, subject_id, mark)
VALUES
    (1, 1, 30),
    (1, 2, 28),
    (1, 3, 27),
    (2, 1, 25),
    (2, 4, 22),
    (2, 5, 26),
    (3, 1, 30),
    (3, 2, 29),
    (3, 6, 25),
    (4, 3, 18),
    (4, 7, 21),
    (5, 2, 27),
    (5, 4, 22),
    (5, 5, 28),
    (6, 1, 29),
    (6, 6, 26),
    (7, 3, 24),
    (7, 4, 30),
    (8, 1, 20),
    (8, 5, 22),
    (9, 2, 30),
    (9, 6, 19),
    (10, 3, 23),
    (11, 4, 28),
    (12, 1, 24),
    (13, 2, 25),
    (14, 5, 30),
    (15, 7, 26),
    (16, 6, 18),
    (17, 3, 21);
