import {
  allTodos,
  allUsers,
  getTodo,
  getUser,
  allTodosByUser,
} from "../../database.js";

export const resolvers = {
  Query: {
    // todos: async (_, __, ___, ____) => {
    //   // console.log('root', _)
    //   // console.log('args', __)
    //   // console.log('context', ___)
    //   // console.log('info', ____)
    //   // return [{ id: "hello world" }, { id: "goodbye moon" }];
    //   return allTodos();
    // },
    todos: async function () {
      //   console.log("root", root);
      //   console.log("args", args);
      //   console.log("context", context);
      //   console.log("info", info);
      return allTodos();
    },
    todo: async (_, args) => {
      return getTodo(args.id);
    },
    users: async (_, __) => allUsers(),
    user: async (_, { id }) => getUser(id),
  },

  Todo: {
    user: async (a, b) => {
      console.log("Todo:user");
      return getUser(a.idUser);
    },
  },

  User: {
    enam: async (row) => {
      return row.name.split("").reverse().join("");
    },
    todos: async (row) => {
      console.log("User:todos");
      return allTodosByUser(row.id);
    },
  },
};
