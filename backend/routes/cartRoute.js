import express from "express";
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js"; // Ensure correct file path
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router(); // Fixed Router syntax issue

cartRouter.post("/add", authMiddleware,addToCart); // Ensure controller methods exist
cartRouter.post("/remove",authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware,getCart);

export default cartRouter;
