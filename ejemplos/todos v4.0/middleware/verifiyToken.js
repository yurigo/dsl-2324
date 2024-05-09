import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  console.log("autenticando");
  if (!req.headers.authorization)
    return next("no hay cabecera de autenticacion");

  const token = req.headers.authorization.split(" ")[1];

  const payload = jwt.verify(token, process.env.JWT_SECRET_SIGN);

  req.USER_ID = payload.user;

  next();
}

export function authorizate(req, res, next) {
  console.log("autorizando", req.USER_ID);
  // tenemos que validar que el usuario logueado sea el usuario de los params
  // if (!req.headers.authorization)
  //   return next("no hay cabecera de autenticacion");
  // const token = req.headers.authorization.split(" ")[1];
  // const payload = jwt.verify(token, process.env.JWT_SECRET_SIGN);

  // console.log(payload);

  const idUser = req.params.idUser; // <-- string

  if (idUser != req.USER_ID)
    return next({
      error: 403,
      message: "no tienes permisos para ver los todos de otra gente",
    });

  next();
}
