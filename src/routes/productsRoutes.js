import express from 'express';
import { ProductsControllers } from '../controllers/productsControllers.js';


export class ProductsRoutes {

    constructor() {
        this.router = express.Router();
        this.controller = new ProductsControllers();
        this.router
            .get('/', this.controller.getProducts)
            .get('/name/:name', this.controller.getProductByName)
            .get('/delete/:id', this.controller.delProduct)
            .get('/:id', this.controller.getProductById)
    }

}