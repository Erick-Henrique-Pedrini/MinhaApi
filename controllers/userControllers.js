import User from "../models/userModel.js";

// Função para criar usuário
async function CreateUser(req, res) {
    const { name, email, senha } = req.body;

    // Verifique se os dados estão chegando corretamente
    console.log("Recebido:", req.body);

    try {
        const userFind = await User.findOne({ email });

        if (userFind) {
            return res.status(400).json("Já existe um usuário com esse e-mail");
        }

        const user = new User({
            name,
            email,
            senha
        });

        await user.save();
        return res.status(201).json(user);  // Retorna o usuário criado com status 201
    } catch (error) {
        console.error("Erro ao criar usuário:", error);  // Mostra o erro completo
        return res.status(500).json("Erro ao criar usuário");
    }
}


// Função para login
async function LoginUser(req, res) {
    const { email, senha } = req.body;
    try {
        const userFind = await User.findOne({ email, senha });

        if (userFind) {
            return res.json("Logado");
        } else {
            return res.status(401).json("Não logado");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json("Erro ao realizar login");
    }
}

export { CreateUser, LoginUser };
