import "dotenv/config";
import express from "express";
import userRouters from "./routers/userRoutes.js";
import authRouters from "./routers/authRoters.js";

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use("/users", userRouters);
app.use("/auth", authRouters)


app.listen(port, ()=> {
    console.log("Servidor rodando na porta " + port);
});