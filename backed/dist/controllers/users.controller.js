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
exports.validateUser = void 0;
const connect_1 = require("../database/connect");
const validateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombreUsuario, password } = req.body;
        const pool = yield (0, connect_1.getConnection)();
        const result = yield (pool === null || pool === void 0 ? void 0 : pool.request().input('nombreUsuario', connect_1.sql.NVarChar, nombreUsuario).input('password', connect_1.sql.NVarChar, password).query("SELECT * FROM Usuarios WHERE nombreUsuario = @nombreUsuario AND password = @password"));
        if ((result === null || result === void 0 ? void 0 : result.recordset) && result.recordset.length > 0) {
            // Inicio de sesión exitoso
            res.json({ authentication: true, nombre: result.recordset[0].nombre });
        }
        else {
            // Inicio de sesión incorrecto
            res.json({ authentication: false });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.validateUser = validateUser;
