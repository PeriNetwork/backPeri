import express from "express";
import "reflect-metadata";
import "./database";
import {routes} from "./database/routes/index";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("⚡ Server is running!"));