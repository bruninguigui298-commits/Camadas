import pool from "../configs/database.js";

const UserRepository = {
    selection: async () => {
        const sql = "SELECT * FROM users;";
        const [rows] = await pool.execute(sql);
        return rows;
    },

    SelectionPorId: async (userId) => {
        const sql = "SELECT * FROM users WHERE id = ?;";
        const [rows] = await pool.execute(sql, [userId]);
        return rows;
    },
     selectionByEmail: async (email) => {
        const sql = "SELECT * FROM users WHERE email = ?;";
        const [rows] = await pool.execute(sql, [email]);
        return rows;
    },
    

    delete: async (userId) => {
        const sql = "DELETE FROM users WHERE id = ?;";
        const [rows] = await pool.execute(sql, [userId]);
        return rows;
    },
    create: async (name, email, password, role) => {
        console.log(name, email, password, role);
        
        // const sql = "INSERT INTO users (name, email, password) VALUE(?,?,?);";
        const sql = "INSERT INTO users VALUE(null, ?, ?, ?, ?);";
        const [rows] = await pool.execute(sql, [name, email, password, role]);
        return rows;
    },
    update: async (name, email, password, userId) => {
        const sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?;";
        const [rows] = await pool.execute(sql, [name, email, password, userId]);
        return rows;
        
    },

}

export default UserRepository;
