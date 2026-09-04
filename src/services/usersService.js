import UserRepository from "../repositories/UserRepository.js";

const userService = {
    recoverUser: async () => {
        const result = await UserRepository.selection();
        return result;
    },

    recoverUserPorid: async (userId) => {
        const result = await UserRepository.selection(userId);
        return result;
    },

    deleteUser: async (userId) => {
        const result = await UserRepository.delete(userId);
        return result;
    },

    createUser: async (user) => {
        const result = await UserRepository.create(user.name, user.email, user.password);
        return result;
    },

    updadeUser: async (user) => {
        const result = await UserRepository.create(user.name, user.email, user.password, user.id);
        return result;

    }

};

export default userService;