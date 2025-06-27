import express from "express";
import { sendSubscriberEmail } from "../controllers/subscribeController.js";

const subscribeRouter = express.Router();

subscribeRouter.post("/", sendSubscriberEmail);

export default subscribeRouter;
