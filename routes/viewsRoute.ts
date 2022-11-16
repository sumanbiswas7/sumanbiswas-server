import { Router } from "express";
import { set, ref, get, goOffline } from "firebase/database";
import { app, database } from "../database/firebase";
const router = Router();

router.post("/", async (req, res) => {
    // increments total views by 1
    // @params: count: number(current views)
    const prevCount = req.query.count as string;
    const intCount = parseInt(prevCount)
    if (!intCount) return res.send(`Missing Query Params: @count`)

    set(ref(database, "/views"), { views: intCount + 1 })
    goOffline(database)

    return res.send(`views increment: successful`)
})

router.get("/", async (req, res) => {
    // returns total views or 0 
    const data = await get(ref(database, "/views"))
    const response = data.val() || { views: 0 }
    goOffline(database)
    return res.send(response)

})

export default router;
