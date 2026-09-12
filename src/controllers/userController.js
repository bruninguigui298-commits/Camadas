import User from "../models/User.js";
import userService from "../services/usersService.js";

const userController = {
    Selection: async (req, res) => {
        try {
            const result = await userService.recoverUser();

            return res.status(200).json({
                message: "Users successfully recovered!",
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                message: "Erro ao recuperar usuarios!",
                data: error.message
            })
        }
    },
    create: async (req, res) => {
        try {
            const { name, email, password, role } = req.body;

            const hashedPassword = await userService.hashPassword(password);

            const user = new User(name, email, hashedPassword, role, null);

            const result = await userService.createUser(user);
            return res.status(201).json({
                message: "Usuario criado com sucesso",
                data: result
            });
        }
        catch (error) {
            console.error(error)
            return res.status(500).json({
                message: "Erro ao criar usuario",
                data: error.message
            });

        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const result = await userService.deleteUser(id);
            return res.status(201).json({
                message: "Usuario deletado com sucesso",
                data: result
            })
        }
        catch (error) {
            console.log(error)
            return res.status(500).json({
                message: "Erro ao deletar usuario",
                data: error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id

            const { name, email, password,role } = req.body;

            const user = new User(name, email, password,role, id);

            const result = await userService.updadeUser(user);
            return res.status(200).json({
                message: "User updated.",
                data: result
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao atualizar usuario",
                data: error.message
            })
        }

    }
}

export default userController;