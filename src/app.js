const express = require("express")

const dotenv = require("dotenv");

dotenv.config();
console.log(process.env.GOOGLE_GEMNI_KEY);

const airoutes = require("./routes/ai.routes");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.use("/ai",airoutes);

module.exports = app;