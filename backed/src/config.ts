import {config} from 'dotenv';

config();
export default {
    port: process.env.PORT || 4000,
    DBUser: process.env.DB_USER || '',
    DBPassword: process.env.DB_PASSWORD || '',
    serverName: process.env.DB_SERVER_NAME || '',
    DBName: process.env.DB_NAME || ''
}
