import { Router } from "express"
import { router as usersRouter } from "./users.routes"
import { router as authenticateRouter } from "./authenticate.routes"

const router = Router()

router.use("/users", usersRouter)

router.use("/sessions", authenticateRouter)

export { router }