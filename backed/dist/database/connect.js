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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = exports.getConnection = void 0;
const mssql_1 = __importDefault(require("mssql"));
exports.sql = mssql_1.default;
const config_1 = __importDefault(require("../config"));
const dbSettings = {
    user: config_1.default.DBUser,
    password: config_1.default.DBPassword,
    server: config_1.default.serverName,
    database: config_1.default.DBName,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
function getConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const pool = yield mssql_1.default.connect(dbSettings);
            return pool;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getConnection = getConnection;
