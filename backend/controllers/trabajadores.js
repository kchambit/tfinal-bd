import {pool} from '../db.js';

export const getTecnicos = async (req, res) => {
    const q = "SELECT * FROM tecnicos";
    const [tecnicos] = await pool.query(q);
    res.json(tecnicos);
}

export const getSecretaria = async (req, res) => {
    const q = "SELECT * FROM secretaria";
    const [secretaria] = await pool.query(q);
    res.json(secretaria);
}

export const getPracticantes = async (req, res) => {
    const q = "SELECT * FROM practicante";
    const [practicantes] = await pool.query(q);
    res.json(practicantes);
}

export const getIngenieros = async (req, res) => {
    const q = "SELECT * FROM ingeniero";
    const [ingeniero] = await pool.query(q);
    res.json(ingeniero);
}

export const getAdministradores = async (req, res) => {
    const q = "SELECT * FROM administrador";
    const [administrador] = await pool.query(q);
    res.json(administrador);
}


export const getJefes = async (req, res) => {
    const q = "SELECT * FROM jefe";
    const [jefe] = await pool.query(q);
    res.json(jefe);
}