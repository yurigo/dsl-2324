-- SQLite
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
);

INSERT INTO users (name, email, password) VALUES ("Alice" , "a@a.com" , "password1.");
INSERT INTO users (name, email, password) VALUES ("Bob" , "b@b.com" , "password1.");
INSERT INTO users (name, email, password) VALUES ("Charlie" , "c@c.com" , "password1.");

DROP TABLE IF EXISTS todos;
CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT,
    done INT,
    idUser INT
);

INSERT INTO todos (text, done, idUser) VALUES ("Crear la base de datos" , TRUE, 1 );
INSERT INTO todos (text, done, idUser) VALUES ("Crear la tabla de todos" , TRUE, 1 );
INSERT INTO todos (text, done, idUser) VALUES ("Rellenar los datos de la tabla" , TRUE, 1 );
INSERT INTO todos (text, done, idUser) VALUES ("Crear el servicio" , FALSE, 1 );
INSERT INTO todos (text, done, idUser) VALUES ("Profit" , FALSE, 1 );

INSERT INTO todos (text, done, idUser) VALUES ("Lorem ipsum dolor sit amet" , TRUE, 2 );
INSERT INTO todos (text, done, idUser) VALUES ("A" , FALSE, 2 );
INSERT INTO todos (text, done, idUser) VALUES ("B" , FALSE, 2 );


