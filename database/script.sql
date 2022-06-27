-- Creación de base de datos
CREATE DATABASE abet;

-- Uso de la base de datos
use abet;

-- Creación de la tabla usuarios
CREATE TABLE USUARIOS(
    nombreUsuario VARCHAR(35) NOT NULL PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    contrasena VARCHAR(256) NOT NULL,
    tipo INTEGER(1) NOT NULL
);

-- Para cifrar la contrasena
-- CREATE TABLE USUARIOS_CIFRADOS(
--     nombreUsuario VARCHAR(35) NOT NULL PRIMARY KEY,
--     nombre VARCHAR(60) NOT NULL,
--     contrasena VARCHAR NOT NULL,
--     tipo INTEGER(1) NOT NULL
-- );

-- Creación de la tabla de resultados de aprendizaje
CREATE TABLE RESULTADOS_APRENDIZAJE(
    id INTEGER NOT NULL PRIMARY KEY,
    descripcion VARCHAR(150) NOT NULL,
    user_usuario VARCHAR(35) NOT NULL,
    CONSTRAINT user1 FOREIGN KEY(user_usuario) REFERENCES USUARIOS(nombreUsuario)
);


-- Creación de la tabla semestres
CREATE TABLE SEMESTRES(
    id VARCHAR(12) NOT NULL PRIMARY KEY,
    inicio DATE NOT NULL,
    fin DATE NOT NULL,
    actual INTEGER NOT NULL
);

-- Creación de la tabla carreras
CREATE TABLE CARRERAS(
    codigo VARCHAR(30) NOT NULL PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL
);

-- Creación de la tabla asignatura
CREATE TABLE ASIGNATURAS(
    codigo VARCHAR(30) NOT NULL PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    creditos INTEGER NOT NULL,
    user_usuario VARCHAR(35) NOT NULL,
    cod_carrera VARCHAR(30) NOT NULL,
    id_semestre VARCHAR(12) NOT NULL,
    FOREIGN KEY(user_usuario) REFERENCES USUARIOS(nombreUsuario),
    FOREIGN KEY(cod_carrera) REFERENCES CARRERAS(codigo),
    FOREIGN KEY(id_semestre) REFERENCES SEMESTRES(id)
);

-- Creación de la tabla de grupos
CREATE TABLE GRUPOS(
    id INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    creditos INTEGER NOT NULL,
    cod_asign VARCHAR(30) NOT NULL,
    id_resul INTEGER NOT NULL,
    user_usuario VARCHAR(35) NOT NULL,
    FOREIGN KEY(cod_asign) REFERENCES ASIGNATURAS(codigo),
    FOREIGN KEY(id_resul) REFERENCES RESULTADOS_APRENDIZAJE(id),
    FOREIGN KEY(user_usuario) REFERENCES USUARIOS(nombreUsuario)
);

-- Creación de la tabla de indicadores de desempeño
CREATE TABLE INDICADORES_DESEMPENO(
    id INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    id_resultado INTEGER NOT NULL,
    FOREIGN KEY(id_resultado) REFERENCES RESULTADOS_APRENDIZAJE(id)
); 

-- Creación de la tabla de actividades
CREATE TABLE ACTIVIDADES(
    id INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    tipo VARCHAR(40) NOT NULL,
    evidencia BINARY NOT NULL,
    retroalimentacion BINARY NOT NULL,
    id_grupo INTEGER NOT NULL,
    id_indicador INTEGER NOT NULL,
    FOREIGN KEY(id_grupo) REFERENCES GRUPOS(id),
    FOREIGN KEY(id_indicador) REFERENCES INDICADORES_DESEMPENO(id)
);

-- Creación de la tabla de reportes
CREATE TABLE REPORTES(
    id INTEGER NOT NULL PRIMARY KEY,
    nombre VARCHAR(120) NOT NULL,
    tipo VARCHAR(40) NOT NULL,
    evidencia BINARY NOT NULL,
    user_usuario VARCHAR(35) NOT NULL,
    FOREIGN KEY(user_usuario) REFERENCES USUARIOS(nombreUsuario)
);

-- Creación de la tabla mensajes
CREATE TABLE MENSAJES(
    id INTEGER NOT NULL PRIMARY KEY,
    asunto VARCHAR(150) NOT NULL,
    contenido VARCHAR(600) NOT NULL,
    fecha DATE NOT NULL,
    hora DATE NOT NULL,
    emisor VARCHAR(35) NOT NULL,
    receptor VARCHAR(35) NOT NULL,
    FOREIGN KEY(emisor) REFERENCES USUARIOS(nombreUsuario),
    FOREIGN KEY(receptor) REFERENCES USUARIOS(nombreUsuario)
);

-- Creación de la tabla Rúbricas SO
CREATE TABLE RUBRICAS_SO(
    id INTEGER NOT NULL PRIMARY KEY,
    noEstudiantes INTEGER NOT NULL,
    insMedicion VARCHAR(150) NOT NULL,
    resultados VARCHAR(400) NOT NULL,
    mejoras VARCHAR(400) NOT NULL,
    id_resultado INTEGER NOT NULL,
    FOREIGN KEY(id_resultado) REFERENCES RESULTADOS_APRENDIZAJE(id)
);

-- Creación de la tabla criterios
CREATE TABLE CRITERIOS(
    id INTEGER NOT NULL PRIMARY KEY,
    porcentaje DOUBLE NOT NULL,
    numOut INTEGER NOT NULL,
    outstanding DOUBLE NOT NULL,
    numProf INTEGER NOT NULL,
    proficent DOUBLE NOT NULL,
    numDev INTEGER NOT NULL,
    developing DOUBLE NOT NULL,
    numBeg INTEGER NOT NULL,
    begining DOUBLE NOT NULL,
    id_rubrica INTEGER NOT NULL,
    FOREIGN KEY(id_rubrica) REFERENCES RUBRICAS_SO(id)
);

-- Creación de la tabla periodos
CREATE TABLE ASIGNATURAS_SEMESTRES(    
    cod_asig VARCHAR(30) NOT NULL,
    id_sem VARCHAR(12) NOT NULL,
    FOREIGN KEY(cod_asig) REFERENCES ASIGNATURAS(codigo),
    FOREIGN KEY(id_sem) REFERENCES SEMESTRES(id)
);

-- Inserción de usuario de prueba
INSERT INTO USUARIOS VALUES('prueba', 'prueba', '123', 1);
