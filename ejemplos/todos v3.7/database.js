import bsqlite3 from "better-sqlite3";
import bcrypt from "bcrypt";
const DBSOURCE = "./todos.sqlite";

const db2 = bsqlite3(DBSOURCE);

export function allTodos() {
  const result = db2.prepare(`SELECT * FROM todos`).all();
  return result;
}

export function allTodosByUser(idUser) {
  const result = db2.prepare("SELECT * FROM todos WHERE idUser=?").all(idUser);
  return result;
}

export function getTodo(id, idUser) {
  const result = db2
    .prepare("SELECT * FROM todos WHERE id=? AND idUser=?")
    .get(id, idUser);
  return result;
}

export function allUsers() {
  const result = db2.prepare("SELECT * FROM users").all();
  // return result;
  return result.map((x) => {
    const { password, ...rest } = x;
    return rest;
  });
}

export function getUser(id) {
  const result = db2
    .prepare(`SELECT id, email, name FROM users WHERE id = ?`)
    .get(id);
  return result;
}

// export function insertUser(toInsert){
//     const {name, email, password} = toInsert

//     const saltRounds = 10;
//     const myPlaintextPassword = password;

//     return new Promise((resolve, reject) => {
//         bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//             // Store hash in your password DB.
//             if (err) reject(err);

//             try{
//                 const result = db2
//                 .prepare(`INSERT INTO users (name , email , password) VALUES (? , ? , ?)`)
//                 .run(name, email, hash);
//                     resolve(result)
//             }
//             catch(ex){
//                 reject(ex);
//             }
//         });
//     })
// }

export async function insertUser(toInsert) {
  const { name, email, password } = toInsert;

  const saltRounds = 10;
  const myPlaintextPassword = password;
  const hash = await bcrypt.hash(myPlaintextPassword, saltRounds);

  const result = db2
    .prepare(`INSERT INTO users (name , email , password) VALUES (? , ? , ?)`)
    .run(name, email, hash);

  return result;
}

/**
 * hace un update de user y los parametros son variables.
 * @param {*} id
 * @param {*} toUpdate
 * @returns
 */
export function updateUser(id, toUpdate) {
  const keys = Object.keys(toUpdate);
  const values = Object.values(toUpdate);
  const stringKeys = keys.map((x) => `${x} = ?`).join(" , ");
  const result = db2
    .prepare(`UPDATE users SET ${stringKeys} where id = ?`)
    .run(...values, id);
  return result;
}

export async function authenticate(email, password) {
  // console.log(email, password);
  const result = db2.prepare(`SELECT * FROM users WHERE email = ?`).get(email);

  console.log(result);

  if (!result) return false;

  try {
    if (await bcrypt.compare(password, result.password)) {
      return result;
    }
  } catch (ex) {
    return false;
  }
}
