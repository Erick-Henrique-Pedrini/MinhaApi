import { version } from "env";
import User from "../models/userModel.js";
import mongoose from "mongoose";

async function CreateUser(req, res) {
   
    const {name,email,senha} = req.body
    const userFind = await User.findOne({email})
    const user = new User({
        "name": name,
        "email": email,
        "senha": senha
    },
    {versionKey: false }
)
    
    while(userFind){
        res.json("Ja tem")
    }
    
    await user.save()
    return user
    

}

export default CreateUser;