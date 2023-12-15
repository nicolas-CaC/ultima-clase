import express from 'express';
import { resolve } from 'path';
import { ProductsRoutes } from './src/routes/productsRoutes.js';

const app = express();
const PORT = 8080;
const productsRoutes = new ProductsRoutes();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', resolve() + '/src/views');

app.use('/productos', productsRoutes.router);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
