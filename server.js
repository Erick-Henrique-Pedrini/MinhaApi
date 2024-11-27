import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import cors from 'cors'; // Importa o pacote CORS

const app = express();

// Configura o middleware CORS
app.use(cors({
    origin: 'http://localhost:5173', // URL do seu front-end (ajuste conforme necessário)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));


app.use(express.json());

const port = 8080;

mongoose.connect('mongodb+srv://Erick:123@cluster0.thocx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(error => console.log("Erro ao conectar ao MongoDB:", error));

app.use("/", router);  // Define as rotas
app.use("/login", router)
app.use("/user", router)
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
