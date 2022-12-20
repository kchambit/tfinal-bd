import {pool} from '../db.js';

export const getClients = async (req, res) => {
    const q = "SELECT * FROM cliente";
    const [clients] = await pool.query(q);
    res.json(clients);
}