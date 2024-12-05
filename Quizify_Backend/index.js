const express = require("express");
const cors = require("cors");
require("dotenv").config();

const quizRouter = require("./router/quiz.router");
const {loginRouter, signupRouter} = require("./router/auth.router");
const routeNotFound = require("./middleware/routeNotFound");
const quizzes = require("./db/quizzes");


const app = express();   // Creating a Server
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json(quizzes);
});

app.use("/quiz", quizRouter);
app.use("/auth/login", loginRouter);
app.use("/auth/signup", signupRouter);
app.use(routeNotFound); 



// app.get("/quiz", (req, res) => {
//     res.send(quizzes.data);
// })


app.listen(process.env.PORT || PORT, () => {
    console.log("Server Started");
})