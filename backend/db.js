import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "crk222",
    database: "test"
})