import express from "express"
const app = express()
import authRoutes from "./routes/auth.js"
import clientRoutes from "./routes/clients.js"
import cors from "cors"

// Separate backend files, routes, actions, etc. 
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {res.json("Hello World")})

app.use("/api/auth", authRoutes)
app.use("/api/clients", clientRoutes)

app.listen(8800, () => {
    console.log("App is running on port 8800")
})