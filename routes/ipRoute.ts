import { Router } from "express";
import { database } from "../database/firebase";
import { goOnline, push, ref } from "firebase/database";
import moment from "moment"
import axios from "axios";
const router = Router()


router.post("/", (req, res) => {
    // gets user data & pushes on db
    const apiKey = req.headers.apikey
    if (!apiKey) return res.send(`apiKey missing`)
    axios.get(`https://api.ipdata.co/?api-key=${apiKey}`)
        .then((r) => {
            const dateTime = moment().utcOffset("+05:30").format('h:mm A, Do MMMM YYYY')
            const dataObj = { date: dateTime, info: r.data }
            goOnline(database)
            push(ref(database, "users"), dataObj)
                .then(() => res.send({ msg: `Success` }))
                .catch(e => res.send({ msg: e.message }))
        })
        .catch(e => res.send({ msg: e.message }))

})

export default router


