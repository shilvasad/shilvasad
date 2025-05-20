import express from "express";
import {
  getOnePageDetails,
  createPageDetails,
  getPageDetails,
  updatePageDetails,
  deletePageDetails,
} from "./page-details.controller.js";

const pageDetailsRoute = express.Router();
pageDetailsRoute.get("/", getPageDetails);
pageDetailsRoute.post("/", createPageDetails);
pageDetailsRoute.put("/:id", updatePageDetails);
pageDetailsRoute.delete("/:id", deletePageDetails);
pageDetailsRoute.get("/:id", getOnePageDetails);

export default pageDetailsRoute;
