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
    return result.map(x => {
        const {password, ...rest} = x;
        return rest;
    })
}

export function getUser(id){
    const result = db2.prepare(`SELECT id, email, name FROM users WHERE id = ?`).get(id);
    return result;
}


 export function insertUser(toInsert){
    const {name, email, password} = toInsert
    const result = db2
        .prepare(`INSERT INTO users (name , email , password) VALUES (? , ? , ?)`)
        .run(name, email, password);
    return result;
}



/**
 * hace un update de user y los parametros son variables.
 * @param {*} id 
 * @param {*} toUpdate 
 * @returns 
 */
export function updateUser(id, toUpdate){
    const keys = Object.keys(toUpdate)
    const values = Object.values(toUpdate)
    const stringKeys = keys
        .map(x => `${x} = ?`)
        .join(" , ")
    const result = db2
        .prepare(`UPDATE users SET ${stringKeys} where id = ?`)
        .run(...values , id);
    return result;
}


export function authenticate(email, password){
    const result = db2.prepare(`SELECT * FROM users WHERE email = ? and password = ?`).get(email , password);
    if (result) return true;
    return false;
}

