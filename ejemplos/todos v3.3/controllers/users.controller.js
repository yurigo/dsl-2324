import { allUsers,
    getUser, 
    // insertUser,
    // updateUser,
    // deleteUser,
} from "../database.js"


export const allUsersController = (req, res, next) => {
    res.json(allUsers());
}

export const getUsersController = (req, res, next) => {
    res.json(getUser(req.params.id));
}
export const insertUserController = (req, res, next) => {
    res.status(500).send("not implemented")
}
export const updateUserController = (req, res, next) => {
    res.status(500).send("not implemented")
}
export const deleteUserController = (req, res, next) => {
    res.status(500).send("not implemented")
}