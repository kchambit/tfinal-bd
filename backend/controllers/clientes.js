import {pool} from '../db.js';

export const getUsers = async (req, res) => {
    const q = "SELECT * FROM usuarios";
    const [users] = await pool.query(q);
    res.json(users);
}

export const updateUser = async (req, res) => {
    const { username } = req.params;
    const { user, password, rol } = req.body;
    const q = "UPDATE usuarios SET user= ?, password = ?, rol = ? WHERE user = ?";
    const [rows] = await pool.query(q, [user, password, rol, username]);
    res.json({status: "Usuario actualizado"});
}

export const deleteUser = async (req, res) => {
    const { user } = req.params;
    const q = "DELETE FROM usuarios WHERE user = ?";
    const [rows] = await pool.query(q, [user]);
    res.json({status: "Usuario eliminado"});
}

export const getClients = async (req, res) => {
    const q = "SELECT * FROM cliente";
    const [clients] = await pool.query(q);
    res.json(clients);
}

export const getContratistas = async (req, res) => {
    const q = "SELECT * FROM contratista";
    const [contratistas] = await pool.query(q);
    res.json(contratistas);
}