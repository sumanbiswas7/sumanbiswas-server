import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Ola")
})


const PORT = process.env.port || 3999;
app.listen(PORT, () => console.log(`Running on port ${PORT}`))

