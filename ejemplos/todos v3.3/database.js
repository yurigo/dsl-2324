import bsqlite3 from "better-sqlite3"
const DBSOURCE = "./todos.sqlite"

const db2 = bsqlite3(DBSOURCE);

export function allTodos(){
    const result = db2.prepare(`SELECT * FROM todos`).all();
    return result;
}

export function allTodosByUser(idUser) {
    const result = db2.prepare("SELECT * FROM todos WHERE idUser=?").all(idUser);
    return result;
}

export function getTodo(id , idUser) {
    const result = db2.prepare("SELECT * FROM todos WHERE id=? AND idUser=?").get(id, idUser);
    return result;
}

export function allUsers(){
    const result = db2.prepare("SELECT * FROM users").all();
    return result;
}

export function getUser(id){
    const result = db2.prepare(`SELECT * FROM users WHERE id = ?`).get(id);
    return result;
}


