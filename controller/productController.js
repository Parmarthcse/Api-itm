const ProductModel = require("../models/productModel");

// Creating product
const createProduct = async (req, res) => {
    try {
        const result = await ProductModel.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Reading products
const returnProducts = async (req, res) => {
    try {
        const result = await ProductModel.find();
        res.status(200).json(result);
      
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
//update product
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const productExist = await ProductModel.findOne({_id: id});
        if(!productExist){
            return res.status(404).json({message: "Product not found"})
        }
        const result = await ProductModel.findByIdAndUpdate(id, req.body, {
            new: true,

        });
        res.status(200).json(result);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        // Attempt to delete the product directly
        const result = await ProductModel.findByIdAndDelete(id);

        // If no product was found and deleted, return 404
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Product deleted successfully
        res.status(200).json({ message: "Product successfully deleted" });
    } catch (error) {
        res.status(500).json({ message: "Sorry, can't fulfill your request", error: error.message });
    }
};

// Exporting createProduct and returnProducts
module.exports = {
    createProduct,
    returnProducts,
    updateProduct,
    deleteProduct
};
