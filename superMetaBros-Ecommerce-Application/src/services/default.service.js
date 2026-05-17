//place service code here...
import * as repo from '../model/default.repo.js'

export const getAll = async () => await repo.getAll();

// console.log(await getAll());