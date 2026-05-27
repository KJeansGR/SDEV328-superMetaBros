import pool from "./db.connect.js";

// get all products and apply filters
export const getAll = async (filters) => {
    let baseQuery = "SELECT * FROM products";
    let whereClauses = false;
    let values = [];
    
    if (filters?.search && filters.search.trim() != "") {
        baseQuery += " WHERE itemName LIKE ?";
        whereClauses = true;
        values.push(`%${filters.search}%`);
    }
    if (filters?.sortCategory && filters.sortCategory !== "none") {
        baseQuery += whereClauses ? " AND category = ?" : " WHERE category = ?"
        whereClauses = true;
        values.push(filters.sortCategory);
    }
    if (filters?.sortPrice === "asc") {
        baseQuery += " ORDER BY price ASC";
    }
    if (filters?.sortPrice === "desc") {
        baseQuery += " ORDER BY price DESC";
    }

    const [rows] = await pool.query(baseQuery, values);
    return rows;
}
// get by id
export const getById = async id => {
    const [rows] = await pool.query("SELECT * FROM products WHERE id=?", [id]);
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


// remove product 
export const removeProduct = async id => {
    //{table data, item name,description,price, etc...} = data

    const deleted = await getById(id);
    if(!deleted) return null;

    await pool.query("DELETE FROM products WHERE id =?" , [id]);
    return deleted;
}

