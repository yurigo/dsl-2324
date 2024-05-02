import { validateUserSchema } from "../../schemas/userSchema.js";

export function verifyUserSchema(req, res, next) {
  try {
    validateUserSchema(req.body);
    next();
  } catch (ex) {
    next(ex);
  }
}
