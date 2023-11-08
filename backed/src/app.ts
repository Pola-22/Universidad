import express from 'express';
import config from './config';
import productsRoutes from './routes/products.routes';
import usersRouters from './routes/users.routes';
import cors from 'cors';

//iniciar servidor
const app = express();
app.set('port', config.port)

//middlewares
app.use(express.json()); //Permite usar formato json en las rutas post
app.use(express.urlencoded({extended: false})); //Permite recibir datos por medio de formularios html
app.use(cors());

//Usar las rutas
app.use(productsRoutes);
app.use(usersRouters);

//Exportar el app
export default app;