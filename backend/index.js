import express from "express"
const app = express()
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/clientes.js"
import serviceRoutes from "./routes/servicios.js"
import cors from "cors"

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {res.json("Hello World")})

app.use("/api/auth", authRoutes)
app.use("/api/usuarios", userRoutes)
app.use("/api/servicios", serviceRoutes)

app.use(express.static("public"))
app.use('/images', express.static('images'))

app.listen(8800, () => {
    console.log("App is running on port 8800")
})