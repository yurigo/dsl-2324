-- SQLite
DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT,
    done INT
);

INSERT INTO todos (text, done) VALUES ("Crear la base de datos" , TRUE );
INSERT INTO todos (text, done) VALUES ("Crear la tabla de todos" , TRUE );
INSERT INTO todos (text, done) VALUES ("Rellenar los datos de la tabla" , TRUE );
INSERT INTO todos (text, done) VALUES ("Crear el servicio" , FALSE );
INSERT INTO todos (text, done) VALUES ("Profit" , FALSE );
