import { Router } from "express";
const router = Router();

router.post("/", (req, res) => {
    console.log("hiya")
})

router.get("/", (req, res) => {
    res.send(`<h2>views page</h2>`)
})

export default router;
