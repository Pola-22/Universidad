import { Router } from "express";
import {getProducts, createProducts, getProductById, deleteProduct, updateProducts} from '../controllers/products.controller';

const router = Router();

//Creacion de rutas
router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', createProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProduct);

export default router;