"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const cors_1 = __importDefault(require("cors"));
//iniciar servidor
const app = (0, express_1.default)();
app.set('port', config_1.default.port);
//middlewares
app.use(express_1.default.json()); //Permite usar formato json en las rutas post
app.use(express_1.default.urlencoded({ extended: false })); //Permite recibir datos por medio de formularios html
app.use((0, cors_1.default)());
//Usar las rutas
app.use(products_routes_1.default);
app.use(users_routes_1.default);
//Exportar el app
exports.default = app;
