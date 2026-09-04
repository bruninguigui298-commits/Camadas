import pool from "../configs/database.js";

const UserRepository = {
    selection: async () => {
        const sql = "SELECT * FROM users;";
        const [rows] = await pool.execute(sql);
        return rows;
    },

    SelectionPorId: async (userid) => {
        const sql = "SELECT * FROM users WHERE id = ?;";
        const [rows] = await pool.execute(sql, [userid]);
        return rows;
    },

    delete: async (userid) => {
        const sql = "DELETE FROM users WHERE id = ?;";
        const [rows] = await pool.execute(sql, [userid]);
        return rows;
    },
    create: async (name, email, password) => {
        // const sql = "INSERT INTO users (name, email, password) VALUE(?,?,?);";
        const sql = "INSERT INTO users VALUE(null, ?, ?, ?);";
        const [rows] = await pool.execute(sql, [name, email, password]);
        return rows;
    },
    update: async (name, email, password) => {
        const sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?;";
        const [rows] = await pool.execute(sql, [name, email, password]);
        return rows;
    },

}

export default UserRepository;