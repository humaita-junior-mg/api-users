import { Router } from "express" 
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController"
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController"
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController"

const router = Router()

const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const listUsersController = new ListUsersController()

router.get("/", listUsersController.handle)

router.post("/create", createUserController.handle)

router.delete("/delete", deleteUserController.handle)

export { router }