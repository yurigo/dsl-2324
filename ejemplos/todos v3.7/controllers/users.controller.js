import Joi from "joi";

import {
  allUsers,
  getUser,
  insertUser,
  updateUser,
  // deleteUser,
} from "../database.js";

export const allUsersController = (req, res, next) => {
  res.json(allUsers());
};

export const getUsersController = (req, res, next) => {
  res.json(getUser(req.params.id));
};

export const insertUserController = async (req, res, next) => {
  // res.status(501).send("not implemented")
  const toInsert = req.body; // validar que el body sea correcto...
  //console.log("hello world", toInsert);

  //validaciones de la entrada
  //   if (!toInsert.name) throw error;
  //   if (toInsert.password !== toInsert.repeatPassword) return next("fallo");
  //   //...
  //   //...

  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),

    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),

    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

    repeatPassword: Joi.ref("password"),
  });

  const { value, error } = schema.validate(toInsert);

  if (error) {
    return next(error);
  }

  try {
    res.json(await insertUser(value));
  } catch (ex) {
    next(ex);
  }
};

export const updateUserController = (req, res, next) => {
  const id = req.params.id; // verificar que el id es correcto...
  const toUpdate = req.body; // verificar que el body es correcto...

  // res.status(500).send("not implemented")
  res.status(200).json(updateUser(id, toUpdate));
};
export const deleteUserController = (req, res, next) => {
  res.status(501).send("not implemented");
};
