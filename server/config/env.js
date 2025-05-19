import { config } from "dotenv";
config();
const CORS_ORIGIN = process.env.CORS_ORIGIN;
if (!CORS_ORIGIN) {
  console.error("CORS_ORIGIN is not defined in .env file");
  process.exit(1);
}
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const MONGO_URI = process.env.MONGO_URI;
if (!PORT || !HOST || !MONGO_URI) {
  console.error("Server cannot start due to missing environment variables");
  console.error("Please check your .env file");
  if (!PORT && !HOST) {
    console.error("PORT and HOST are not defined in .env file");
    process.exit(1);
  } else if (!PORT) {
    console.error("PORT is not defined in .env file");
    process.exit(1);
  } else if (!HOST) {
    console.error("HOST is not defined in .env file");
    process.exit(1);
  } else if (!MONGO_URI) {
    console.error("MONGO_URI is not defined in .env file");
    process.exit(1);
  }
  process.exit(1);
}
export { PORT, HOST, MONGO_URI, CORS_ORIGIN };
