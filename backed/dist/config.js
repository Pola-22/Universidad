"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = {
    port: process.env.PORT || 4000,
    DBUser: process.env.DB_USER || '',
    DBPassword: process.env.DB_PASSWORD || '',
    serverName: process.env.DB_SERVER_NAME || '',
    DBName: process.env.DB_NAME || ''
};
