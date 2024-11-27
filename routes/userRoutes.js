import express from "express";
import { CreateUser, LoginUser } from "../controllers/userControllers.js";  // Correção da importação
import User from "../models/userModel.js";

const router = express.Router();

// Rota para criar um usuário
router.post("/", async (req, res) => {
    await CreateUser(req, res);  
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json("Erro ao obter usuários");
    }
});

// Rota de login
router.post("/login", async (req, res) => {
    await LoginUser(req, res);  // Chama a função de login corretamente e envia a resposta
});

export default router;
