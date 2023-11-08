import { Request, Response } from "express";
import { getConnection, sql } from "../database/connect";

export const validateUser = async (req: Request, res: Response) => {
    try {
        const {nombreUsuario, password} = req.body;
        const pool = await getConnection();
        const result = await pool?.request()
            .input('nombreUsuario', sql.NVarChar, nombreUsuario)
            .input('password', sql.NVarChar, password)
            .query("SELECT * FROM Usuarios WHERE nombreUsuario = @nombreUsuario AND password = @password");

        if (result?.recordset && result.recordset.length > 0) {
            // Inicio de sesión exitoso
            res.json({ authentication: true, nombre: result.recordset[0].nombre });
        } else {
            // Inicio de sesión incorrecto
            res.json({ authentication: false });
        }
    } catch (error) {
        console.log(error);
    }
}