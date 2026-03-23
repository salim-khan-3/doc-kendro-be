import "dotenv/config";
import express from "express";
import cors from "cors";
import usersRouter from "./routes/users.js";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
    res.json({ status: "server is running fine" });
});
app.use("/users", usersRouter);
const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
    console.log(`API listening on http://localhost:${port}`);
});
export default app;
