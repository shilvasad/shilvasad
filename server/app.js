import express from "express";
import cors from "cors";
import apiRouter from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
