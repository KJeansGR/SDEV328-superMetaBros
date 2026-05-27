//place controller functions here...
import * as productService from '../services/default.service.js'

export const renderHome = async (req, res) => {
    try {
        const records = await productService.getAll();
        res.render("default", {
            title: "SuperMetaBros Beverages inc.",
            subtitle: "We quench thirst!",
            howToOrder: "Add an item you like from the menu to your cart, or view more information about it. Once you've decided, it will be prepared for you.", //description of service, like a robot that makes a drink your you, or an online order for pick up later.
            products: records 
        });
    } catch (error) {
    console.error("--- DATABASE LAYER ERROR LOG ---");
    console.error(error); 
    console.error("--------------------------------");
    
    res.status(500).json({ 
        message: "Failed to load dynamic inventory.",
        error: error.toString()
    });
}
};
export const renderLogin = (req, res) => {
    res.render("loginPage", {
        title: "Sign In | SuperMetaBros"
    });
};

export const getAll = async (req, res) => {
    
    const {search, sortPrice, sortCategory} = req.query; // these search filters are filled out from fetch request in homepage.js otherwise null/undefined
    const filters = {search, sortPrice, sortCategory};
    
    try {
        const records = await productService.getAll(filters);
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

export const getById = async (req, res) => {
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

export const addProduct = async (req,res) =>{
  const {itemName, price, info, category} = req.body;

    if(!price || !itemName || !info || !category){
        return res.status(400).json({
        message: "Missing required fields",
        data: null
      })
    }
    try {
        const created = await productService.addProduct({
          itemName, price, info, category
        }); 

        res.status(201).json({
            message: `Success creating new product`,
            data: created
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', data: null });
    }
}



export const removeProduct = async (req,res) =>{
    const id = Number(req.params.id);
    
    if(!id){
        return res.status(404).json({
            message: `item with ${id} not found`
        });
    }
    try {
           
        const deleted= await productService.removeProduct(id);

        res.json({ message: 'Deleted', data: deleted });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error,
            data: null
        })
    }
}