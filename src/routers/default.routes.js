import { Router } from "express";
import * as productsController from '../controllers/default.controller.js'
const router = Router();

router.get("/", productsController.renderHome);
router.get("/products", productsController.getAll);
router.get("/products/:id", productsController.getById);
router.post("/register", productsController.addProduct);
router.post("/orders", productsController.createOrder);
router.delete('/products/:id', productsController.removeProduct);

//ejs page for login and sign-up
router.get("/loginPage", productsController.renderLogin);
router.post("/loginPage", productsController.login);
router.get("/createAccount", productsController.renderCreateAccount);
router.post("/createAccount", productsController.createAccount);
router.get("/account", productsController.isLoggedIn, productsController.renderAccount);
router.get("/logout", productsController.logout);


export default router;
