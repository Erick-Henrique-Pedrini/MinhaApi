import mongoose from "mongoose";
import express from "express";
import CreateUser from "../controllers/userControllers.js";
import User from "../models/userModel.js";
const router = express.Router()

router.post("/", async (req, res) => {
    const user = await CreateUser(req, res)

    res.json(user)
})

router.get("/users", async (req, res) => {
    const users = await User.find();

    res.json(users)
})


export default router;