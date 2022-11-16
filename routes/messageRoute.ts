import { Router } from "express"
import { validateEmail } from "../helpers/validateEmail"
import bodyParser from "body-parser"
import { goOnline, push, ref } from "firebase/database"
import moment from "moment"
import { database } from "../database/firebase"
const router = Router()

router.use(bodyParser.json())


interface Data {
    name: string
    message: string
    email: string
    phone?: string
    date?: string
}

router.post("/", (req, res) => {
    // posts new message to database
    // @params: body: messageObj

    const data: Data = req.body
    if (!data.message || !data.name || !data.email) return res.send({ msg: `error: please fill the form correctly` })
    if (!validateEmail(data.email)) return res.send({ msg: `err: provide a valid email` })
    data.date = moment(new Date()).format('h:mm A, Do MMMM YYYY')

    goOnline(database)
    push(ref(database, "/messages"), data)
        .then(() => res.send({ msg: `message sent successfully` }))
        .catch((e) => res.send({ msg: `error: ${e.message}` }));

})


export default router