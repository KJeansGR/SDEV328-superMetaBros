import { Router } from "express";
import * as productsController from '../controllers/default.controller.js'
const router = Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "SuperMetaBros Beverages inc.",
        subtitle: "we quench thirst!"
    });
});

router.get("/products", productsController.getAll);
router.get("/products/:id", productsController.getById);

export default router;