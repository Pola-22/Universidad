import { Request, Response } from "express";
import { getConnection, sql } from "../database/connect";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const pool = await getConnection();
        const result = await pool?.request().query('SELECT * FROM Productos');
        res.json(result?.recordset);
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool?.request()
            .input('id', sql.NVarChar, id)
            .query("SELECT * FROM Productos WHERE productoID = @id");
        res.json(result?.recordset);
    } catch (error) {
        console.log(error);
    }
}

export const createProducts = async (req: Request, res: Response) => {
    try {
        const {usuarioID,nombre,descripcion,precio,cantidadDisponible} = req.body;
        const pool = await getConnection();
        //Realizar insert
        await pool?.request()
        .input("usuarioID", sql.BigInt, usuarioID)
        .input("nombre", sql.NVarChar, nombre)
        .input("descripcion", sql.NVarChar, descripcion)
        .input("precio", sql.SmallMoney, precio)
        .input("cantidadDisponible", sql.Int, cantidadDisponible)
        .query(
            "INSERT INTO Productos (usuarioID, nombre, descripcion, precio, cantidadDisponible) VALUES (@usuarioID, @nombre, @descripcion, @precio, @cantidadDisponible)"
        );
        res.json({usuarioID,nombre,descripcion,precio,cantidadDisponible});
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const pool = await getConnection();
        const result = await pool?.request()
            .input('id', sql.NVarChar, id)
            .query("DELETE FROM Productos WHERE productoID = @id");
        res.send(result?.rowsAffected);
    } catch (error) {
        console.log(error);
    }
}

export const updateProducts = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {usuarioID,nombre,descripcion,precio,cantidadDisponible} = req.body;
        const pool = await getConnection();
        //Realizar insert
        await pool?.request()
        .input('id', sql.NVarChar, id)
        .input("usuarioID", sql.BigInt, usuarioID)
        .input("nombre", sql.NVarChar, nombre)
        .input("descripcion", sql.NVarChar, descripcion)
        .input("precio", sql.SmallMoney, precio)
        .input("cantidadDisponible", sql.Int, cantidadDisponible)
        .query(
            "UPDATE Productos SET usuarioID=@usuarioID, nombre=@nombre, descripcion=@descripcion, precio=@precio, cantidadDisponible=@cantidadDisponible WHERE productoID = @id"
        );
        res.json({id,usuarioID,nombre,descripcion,precio,cantidadDisponible});
    } catch (error) {
        console.log(error);
    }
}