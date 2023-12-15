import { ProductsServices } from "../services/productsServices.js"


const title = 'Productos'

export class ProductsControllers {

    constructor() {
        this.services = new ProductsServices();
    }


    getProducts = async (_, res) => {
        const products = await this.services.getProducts();
        res.render('products', { title, products })
    }


    getProductById = async (req, res) => {
        const product = await this.services.getProductById(req.params.id)
        res.send(product === null ? 'No se encontró el id' : product)
    }


    getProductByName = async (req, res) => {
        const product = await this.services.getProductByName(req.params.name);
        res.send(product)
    }


    delProduct = async (req, res) => {
        const result = await this.services.delProduct(req.params.id);
        res.send(`resultado: ${result}`);
    }

}