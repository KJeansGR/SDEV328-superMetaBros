//place service code here...
import * as repo from '../model/default.repo.js'

export const getAll = async () => await repo.getAll();
export const getById = async id => await repo.getById(id);

// console.log(await getAll());