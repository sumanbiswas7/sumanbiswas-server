import express from "express";
import viewsRoute from "./routes/viewsRoute"
import ipRoute from "./routes/ipRoute"
const app = express();

app.get("/", (req, res) => res.send("sumanbiswas-server"))
app.use("/views", viewsRoute)
app.use("/ip", ipRoute)


const PORT = process.env.PORT || 3999;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

