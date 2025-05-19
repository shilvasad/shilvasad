import express from "express";
import cors from "cors";
import apiRouter from "./routes/index.js";
import {CORS_ORIGIN} from './config/env.js'
const app = express();
app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    maxAge: 3600,
    optionsSuccessStatus: 200,
    preflightContinue: false,
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
  })
);
app.use(express.json());
app.use("/", apiRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
