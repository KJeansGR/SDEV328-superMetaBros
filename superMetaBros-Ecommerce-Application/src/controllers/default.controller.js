//place controller functions here...
import * as productService from '../services/default.service.js'

export const getAll = async (req, res) => {
    try {
        const records = await productService.getAll();
        res.json({ 
            message: 'OK', 
            data: records 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: 'Server error trying to receive all products', 
        });
    }
};

export const getById = async (req,res) =>{
    const id = req.params.id;
    try {
        const product = await productService.getById(id);
        if (!product) {
            return res.status(404).json({
                message: `Product with id ${id} not found`
            });
        }
        res.status(200).json({
            message: `Product with id ${id} located`,
            data: product
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            message: `Server error trying to receive by id = ${id}`,
        });
    }
}