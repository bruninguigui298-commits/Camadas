import UserRepository from "../repositories/UserRepository.js";
import bcrypt from "bcrypt";

const userService = {
    recoverUser: async () => {
        const result = await UserRepository.selection();
        return result;
    },

    recoverUserPorid: async (userId) => {
        const result = await UserRepository.selection(userId);
        return result;
    },
     recoverUserbyEmail: async (email) => {
        const result = await UserRepository.selectionByEmail(email);
        return result;
    },

    deleteUser: async (userId) => {
        const result = await UserRepository.delete(userId);
        return result;
    },

    createUser: async (user) => {
        const result = await UserRepository.create(user.name, user.email, user.password, user.role);
        return result;
    },

    updadeUser: async (user) => {
        const result = await UserRepository.create(user.name, user.email, user.password, user.id);
        return result;

    }, 

    hashPassword: async (password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

};

export default userService;