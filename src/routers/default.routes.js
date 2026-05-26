import { Router } from "express";
import * as productsController from '../controllers/default.controller.js'
const router = Router();

router.get("/", productsController.renderHome);
router.get("/products", productsController.getAll);
router.get("/products/:id", productsController.getById);
router.post("/register", productsController.addProduct);

//ejs page for login and sign-up
router.get("/loginPage", productsController.renderLogin);


export default router;
