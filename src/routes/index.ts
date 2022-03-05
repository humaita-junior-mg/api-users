import { Router } from "express"
import { router as usersRouter } from "./users.routes"

const router = Router()

router.use("/users", usersRouter)

export { router }