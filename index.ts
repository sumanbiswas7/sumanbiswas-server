import express from "express";
import viewsRoute from "./routes/viewsRoute"
const app = express();

app.use("/views", viewsRoute)
app.get("/", (req, res) => res.send("sumanbiswas-server"))


const PORT = process.env.port || 3999;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

