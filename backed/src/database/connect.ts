import sql from 'mssql';
import config from '../config';

const dbSettings = {
    user: config.DBUser,
    password: config.DBPassword,
    server: config.serverName,
    database: config.DBName,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export {sql};