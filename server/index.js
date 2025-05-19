import app from "./app.js";
import { HOST, PORT } from "./config/env.js";
import DB from "./config/db.js";

const startServer = async () => {
  try {
    await DB.connect();

    app.listen(PORT, () => {
      console.log(`\t Access the server: \t http://${HOST}:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
