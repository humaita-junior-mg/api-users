import { Router } from "express" 
import { ensureAdminAuthenticated } from "../middlewares/ensureAdminAuthenticated"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
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



router.post("/create", createUserController.handle)

//other users
router.use(ensureAuthenticated)
router.patch("/password", editUserPasswordController.handle)

//admin
router.use(ensureAdminAuthenticated)
router.get("/", listUsersController.handle)
router.patch("/admin", turnAdminController.handle)
router.delete("/delete", deleteUserController.handle)




export { router }