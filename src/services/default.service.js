//place service code here...
import * as repo from '../model/default.repo.js'

export const getAll = async () => await repo.getAll();
export const getById = async id => await repo.getById(id);
export const addProduct = async data =>{
    const addNewProduct = {...data} // later maybe will need to have more adjustable info, for now just a full spread/copy

    return await repo.addProduct(addNewProduct);
}



export const removeProduct = async id => await repo.removeProduct(id);


  // console.log(await getAll());
