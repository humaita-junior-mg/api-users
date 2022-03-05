import "reflect-metadata"
import express from "express"
import { router } from "./routes/index"

import "./database"
import "./shared/container"

const app = express()

app.use(express.json())

app.use("/", router)

app.listen(3000, ()=>{
    console.log("Server Running...")
})