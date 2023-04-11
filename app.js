const express = require("express");
const todoRouter = require("./routes/todo");

const app = express();

const port = 3010;

app.use(express.json());
app.use("/todo", todoRouter);

app.get("/", (req , res) => {
    res.send("Hello");
});

app.listen(port,() => {
    console.log(`Server listening on port: ${port}`);
});