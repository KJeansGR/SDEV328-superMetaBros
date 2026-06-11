//place service code here...
import * as repo from '../model/default.repo.js';
import bcryt from "bcrypt";
import pool from "../model/db.connect.js";

export const getAll = async (filters) => await repo.getAll(filters);
export const getById = async id => await repo.getById(id);
export const addProduct = async data =>{
    const addNewProduct = {...data} // later maybe will need to have more adjustable info, for now just a full spread/copy

    return await repo.addProduct(addNewProduct);
}

export const removeProduct = async id => await repo.removeProduct(id);

// AUTHENTICATION STUFF
export const hashPassword = async (plainPassword) => {
  const saltRounds = 10;
  return await bcryt.hash(plainPassword, saltRounds);
}


export const validatePassword = async (plainPassword, storedHash) => {
  return await bcryt.compare(plainPassword, storedHash);
};

export const createUser = async (username, password,email,) => {
    
    if(!username) throw new Error("User name required");
    if(!password) throw new Error("Password required");
    //if(role !== "user" && role !== "admin") throw new Error("invalid role");
    const role = 'user';
    const passwordHash = await hashPassword(password);

    const [result] = await pool.execute(
        "INSERT INTO users (username, password, email, role) VALUES (?, ?,?, ?)",
        [username, passwordHash,email, role]
    );
    
    //return {
     //   userId: result.insertId,
     //   username,
        //role
    //};
};

export const findByUsername = async (username) =>{
  const [results]= await pool.query("SELECT userId, username, password, email, role FROM users WHERE username = ? LIMIT 1", [username]);
  return results[0];
}

