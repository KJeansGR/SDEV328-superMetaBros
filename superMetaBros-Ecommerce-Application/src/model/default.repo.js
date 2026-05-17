import pool from "./db.connect.js";

//read 
export const getAll = async () => {
    const [rows] = await pool.query("SELECT * FROM products")
    return rows;
}
// get by id
export const getById = async id => {
    const [rows] = await pool.query(`SELECT * FROM products WHERE id = ${id}`);
    return rows[0];}