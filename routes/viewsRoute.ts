import { Router } from "express";
import { set, ref, get, goOffline, goOnline } from "firebase/database";
import { database } from "../database/firebase";
const router = Router();

router.post("/", async (req, res) => {
    // increments total views by 1
    // @params: count: number(current views)

    goOnline(database)
    const prevCount = req.query.count;
    const intCount = parseInt(<string>prevCount)
    if (!intCount) return res.send(`Missing Query Params: @count`)

    set(ref(database, "/views"), { views: intCount + 1 })

    goOffline(database)
    return res.send({ msg: `Success` })
})

router.get("/", async (req, res) => {
    // returns total views or 0 

    goOnline(database)
    const data = await get(ref(database, "/views"))
    const response = data.val() || { views: 0 }

    goOffline(database)
    return res.send(response)

})

export default router;
