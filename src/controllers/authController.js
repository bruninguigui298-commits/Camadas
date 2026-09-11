import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import userService from "../services/usersService.js";

const authController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const userExists = await userService.recoverUserbyEmail(email)

            if (!userExists || userExists.length === 0) {
                return res.status(400).json({
                    message: "User not found"
                });
            }
            const validPassword = await bcrypt.compare(password, userExists[0].password);

            if (!validPassword) {
                return res.status(401).json({
                    message: "invalid user"
                });
            }
            const accessToken = jwt.sign(

                {
                    id: userExists[0].id,
                    email: userExists[0].email,
                    nome: userExists[0].name
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "3m"
                }
            )

            res.status(200).json({
                message: "Login successful.",
                token: accessToken
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Error identified on the server",
                errorMessage: error.message
            })
        }
    }
}

export default authController;