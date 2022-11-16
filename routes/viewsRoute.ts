import { Router } from "express";
import { getDatabase, ref, get, goOffline } from "firebase/database";
import { app, database } from "../database/firebase";
const router = Router();

router.post("/", async (req, res) => {

})

router.get("/", async (req, res) => {
    // returns total views or 0 
    const db = getDatabase(app)
    const data = await get(ref(db, "/viewss"))
    const response = data.val() || { views: 0 }
    goOffline(db)
    return res.send(response)

})

export default router;
