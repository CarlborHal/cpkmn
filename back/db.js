import { Pool } from "pg";
import dotenv from 'dotenv';
dotenv.config()
const pool = new Pool({
    connectionString: process.env.SQL_DATABASE,
})

pool.on('connect', ()=>console.log('connected to db'))
// await pool.query('SELECT 1'); 
export default pool