CREATE DATABASE abet;

CREATE TABLE DOCENTES(
    nombreUsuario VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    contrasena VARCHAR(30) NOT NULL
);

-- Creación de docentes de prueba
INSERT INTO DOCENTES VALUES('prueba', 'Juan', '123');
INSERT INTO DOCENTES VALUES('prueba2', 'Juan2', '456');
INSERT INTO DOCENTES VALUES('prueba3', 'Juan3', '789');