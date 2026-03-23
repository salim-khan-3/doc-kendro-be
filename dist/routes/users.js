import { Router } from "express";
import prisma from "../prisma/client.js";
const router = Router();
// POST /users
router.post("/", async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await prisma.user.create({
            data: { name, email },
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: "User create failed" });
    }
});
// GET /users
router.get("/", async (_req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});
export default router;
