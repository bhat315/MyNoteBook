import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongoDB")
  })
  .catch((err) => {
    console.log(err)
  })

const app = express()

app.get('/', (req, res) => {
  res.send("Hello Praveen Bhat this side");
});

// to make input as json
app.use(express.json())
app.use(cookieParser())
// app.use(cors({ origin: ["https://mynotebook-1-iw5y.onrender.com"], credentials: true }))
app.use(cors({ origin: [process.env.FRONTEND_URI], credentials: true }))

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

// import routes
import authRouter from "./routes/auth.route.js"
import noteRouter from "./routes/note.route.js"

app.use("/api/auth", authRouter)
app.use("/api/note", noteRouter)

// error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Serer Error"

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})
