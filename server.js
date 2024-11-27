import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";

const app = express();
app.use(express.json());

const port = 3000;

mongoose.connect('mongodb+srv://Erick:123@cluster0.thocx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(error => console.log("Erro ao conectar ao MongoDB:", error));

app.use("/", router);  // Define as rotas
app.use("/login", router)
app.use("/user", router)
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
