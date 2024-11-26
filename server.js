import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
const app = express()
app.use(express.json());
const port = 3000
mongoose.connect('mongodb+srv://Erick:123@cluster0.thocx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(console.log("conectei"))
app.use("/", router)
app.listen(port, () => {
    console.log('conectado')
})

