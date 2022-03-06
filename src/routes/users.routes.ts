import { Router } from "express" 
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController"
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController"
import { EditUserPasswordController } from "../modules/accounts/useCases/editUser/EditUserPasswordController"
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController"
import { TurnAdminController } from "../modules/accounts/useCases/turnAdmin/TurnAdminController"

const router = Router()

const createUserController = new CreateUserController()
const deleteUserController = new DeleteUserController()
const listUsersController = new ListUsersController()
const turnAdminController = new TurnAdminController()
const editUserPasswordController = new EditUserPasswordController()

router.get("/", listUsersController.handle)

router.post("/create", createUserController.handle)

router.put("/password", editUserPasswordController.handle)

router.patch("/turnadmin", turnAdminController.handle)

router.delete("/delete", deleteUserController.handle)

export { router }