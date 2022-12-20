import {pool} from '../db.js';
import {compare, hash} from 'bcrypt';
import jwt from 'jsonwebtoken';
// Address api/auth/login
export const login = async (req, res) => {
    const {email, password} = req.body;
    const q = "SELECT * FROM users WHERE email = ?";
    const [user] = await pool.query(q, [email]);
    if (user.length === 0) {
        return res.json("User not found");
    }
    const isMatch = await compare(password, user[0].password);
    if (!isMatch) {
        return res.json("Incorrect password");
    }
    const token = jwt.sign({id: user[0].id}, process.env.JWT_SECRET, {expiresIn: "1h"});
    return res.json(token);
}
// Address api/auth/logout
export const logout = async (req, res) => {
    res.json("Logout");
}