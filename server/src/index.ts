// api entry point
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import indexRoutes from "./routes/index.routes";

// app setup and middleware
const app = express();
app.use(
    cors({
        origin: process.env["CLIENT_APP"] || "",
        credentials: true,
    })
);
app.use(express.json());
app.use("/api", indexRoutes);

// app listen and base
app.get("/", (_, res) => res.send("Send requests to /api"));

const port = process.env["PORT"] || 3000;
const uri = `http://localhost:${port}`;
app.listen(port, () => console.log("App listening on " + uri));
