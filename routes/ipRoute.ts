import { Router } from "express";
import { database } from "../database/firebase";
import { push, ref, goOffline } from "firebase/database";
import * as dotenv from "dotenv";
import moment from "moment"
import axios from "axios";
const router = Router()
dotenv.config()


router.get("/", (req, res) => {
    // gets user data & pushes on db
    const apiKey = process.env.apiKey
    axios.get(`https://api.ipdata.co/?api-key=${apiKey}`)
        .then((r) => {
            const dateTime = moment().format('h:mm A, Do MMMM YYYY');
            const dataObj = { date: dateTime, info: r.data }
            push(ref(database, "users"), dataObj)
                .then(() => res.send(r.data))
                .catch(e => res.send(e))
        })
        .catch(e => res.send(e))

})


export default router


