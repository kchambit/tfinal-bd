import {pool} from '../db.js';
import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken'; //mby later
// Address api/auth/login
export const login = async (req, res) => {
    const {username, password} = req.body;
    const q = "SELECT * FROM usuarios WHERE user = ?";
    const [user] = await pool.query(q, [username]);
    if (user.length === 0) return res.status(404).json("Usuario no encontrado");
    //const isMatch = bcrypt.compareSync(password, user[0].password);
    if (password !== user[0].password) return res.status(404).json("Contraseña incorrecta");

    return res.status(200).json(user[0]);
    //return user[0].rol;
}
// Address api/auth/register
export const register = async (req, res) => {
    const {username, password, rol} = req.body;
    const q = "INSERT INTO usuarios (user, password, rol) VALUES (?, ?, ?)";
    const [user] = await pool.query(q, [username, password, rol], (err, data) => {
        if (err) return res.status(404).json("No se pudo registrar el usuario");
        return res.status(200).json(data);
    });
    if (user.affectedRows === 0) return res.status(404).json("No se pudo registrar el usuario");
}

// Address api/auth/logout
export const logout = async (req, res) => {
    res.json("Logout");
}