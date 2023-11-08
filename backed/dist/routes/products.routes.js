"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
const router = (0, express_1.Router)();
//Creacion de rutas
router.get('/products', products_controller_1.getProducts);
router.get('/products/:id', products_controller_1.getProductById);
router.post('/products', products_controller_1.createProducts);
router.put('/products/:id', products_controller_1.updateProducts);
router.delete('/products/:id', products_controller_1.deleteProduct);
exports.default = router;
