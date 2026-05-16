//place repository code here...
import pool from "./db.connect.js";

//read 
export const getAll = async () => {
    const [rows] = await pool.query("SELECT * FROM products")
    return rows;
}