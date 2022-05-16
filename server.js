const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080


const router = require("./routes/routing");

app.use("/api/users", router);

app.get("/", (req,res) =>{
    res.send("Hello World")
});

app.listen(PORT, () =>{
    console.log(`server running at ${PORT}`)
});