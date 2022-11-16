import { Router } from "express";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../database/firebase";
const router = Router();

router.post("/", async (req, res) => {
    
})

router.get("/", async (req, res) => {
    const db = getDatabase(app)
    onValue(ref(db, '/views'), (snapshot) => {
        const data = snapshot.val() || { views: 0 }
        return res.send(data)
    }, {
        onlyOnce: true
    });

})

export default router;
