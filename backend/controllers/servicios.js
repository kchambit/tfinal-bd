import {pool} from '../db.js';

export const getServicios = async (req, res) => {
    const q = "SELECT * FROM servicios";
    const [servicios] = await pool.query(q);
    res.json(servicios);
}

export const createService = async (req, res) => {
    const { id, nombre, descripcion, precio, stock } = req.body;
    const q = "INSERT INTO servicios (id, nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?, ?)";
    const [rows] = await pool.query(q, [id, nombre, descripcion, precio, stock]);
    res.json({status: "Servicio creado"});
}

export const deleteServicio = async (req, res) => {
    const { id } = req.params;
    const q = "DELETE FROM servicios WHERE id = ?";
    const [rows] = await pool.query(q, [id]);
    res.json({status: "Servicio eliminado"});
}

export const updateService = async (req, res) => {
    const { sid } = req.params;
    const { id, nombre, descripcion, precio, stock } = req.body;
    const q = "UPDATE servicios SET id = ?,nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?";
    const [rows] = await pool.query(q, [id, nombre, descripcion, precio, stock, sid]);
    res.json({status: "Servicio actualizado"});
}