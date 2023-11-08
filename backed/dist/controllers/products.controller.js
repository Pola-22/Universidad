"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProducts = exports.deleteProduct = exports.createProducts = exports.getProductById = exports.getProducts = void 0;
const connect_1 = require("../database/connect");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield (0, connect_1.getConnection)();
        const result = yield (pool === null || pool === void 0 ? void 0 : pool.request().query('SELECT * FROM Productos'));
        res.json(result === null || result === void 0 ? void 0 : result.recordset);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pool = yield (0, connect_1.getConnection)();
        const result = yield (pool === null || pool === void 0 ? void 0 : pool.request().input('id', connect_1.sql.NVarChar, id).query("SELECT * FROM Productos WHERE productoID = @id"));
        res.json(result === null || result === void 0 ? void 0 : result.recordset);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProductById = getProductById;
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { usuarioID, nombre, descripcion, precio, cantidadDisponible } = req.body;
        const pool = yield (0, connect_1.getConnection)();
        //Realizar insert
        yield (pool === null || pool === void 0 ? void 0 : pool.request().input("usuarioID", connect_1.sql.BigInt, usuarioID).input("nombre", connect_1.sql.NVarChar, nombre).input("descripcion", connect_1.sql.NVarChar, descripcion).input("precio", connect_1.sql.SmallMoney, precio).input("cantidadDisponible", connect_1.sql.Int, cantidadDisponible).query("INSERT INTO Productos (usuarioID, nombre, descripcion, precio, cantidadDisponible) VALUES (@usuarioID, @nombre, @descripcion, @precio, @cantidadDisponible)"));
        res.json({ usuarioID, nombre, descripcion, precio, cantidadDisponible });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createProducts = createProducts;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pool = yield (0, connect_1.getConnection)();
        const result = yield (pool === null || pool === void 0 ? void 0 : pool.request().input('id', connect_1.sql.NVarChar, id).query("DELETE FROM Productos WHERE productoID = @id"));
        res.send(result === null || result === void 0 ? void 0 : result.rowsAffected);
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteProduct = deleteProduct;
const updateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { usuarioID, nombre, descripcion, precio, cantidadDisponible } = req.body;
        const pool = yield (0, connect_1.getConnection)();
        //Realizar insert
        yield (pool === null || pool === void 0 ? void 0 : pool.request().input('id', connect_1.sql.NVarChar, id).input("usuarioID", connect_1.sql.BigInt, usuarioID).input("nombre", connect_1.sql.NVarChar, nombre).input("descripcion", connect_1.sql.NVarChar, descripcion).input("precio", connect_1.sql.SmallMoney, precio).input("cantidadDisponible", connect_1.sql.Int, cantidadDisponible).query("UPDATE Productos SET usuarioID=@usuarioID, nombre=@nombre, descripcion=@descripcion, precio=@precio, cantidadDisponible=@cantidadDisponible WHERE productoID = @id"));
        res.json({ id, usuarioID, nombre, descripcion, precio, cantidadDisponible });
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateProducts = updateProducts;
