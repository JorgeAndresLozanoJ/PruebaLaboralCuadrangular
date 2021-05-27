CREATE DATABASE ng_Teams_db;
USE ng_Teams_db;
CREATE TABLE Equipo(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(180),
    ParGanados INT(8) NOT NULL,
    ParPerdidos INT(8) NOT NULL,
    ParEmpatados INT(8) NOT NULL,
    Registrado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE Equipo TO Equipos;

DESCRIBE Equipos;