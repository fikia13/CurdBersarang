import express from "express";
import cors from "cors";
import UserRoute from "./routes/Route.js";
import db from "./config/Database.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);


app.listen(5000, ()=>console.log("Serve Running and up..."))