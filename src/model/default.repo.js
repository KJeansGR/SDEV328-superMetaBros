import pool from "./db.connect.js";

//read 
export const getAll = async () => {
    const [rows] = await pool.query("SELECT * FROM products")
    return rows;
}
// get by id
export const getById = async id => {
    const [rows] = await pool.query("SELECT * FROM products  WHERE id=?", [id]);
    return rows[0];
}
// add product 
export const addProduct = async data => {
    //{table data, item name,description,price, etc...} = data

    const {itemName, price, info, category} = data;

    const [result] = await
    pool.query("INSERT INTO products(itemName, price, info, category) VALUES (?,?,?,?)",[itemName,price,info,category]);
    
    const id = result.insertId;
    const added = await getById(id);
    
    return added;
}
