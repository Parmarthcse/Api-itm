const express = require("express");
const { createProduct, returnProducts , updateProduct, deleteProduct} = require("../controller/productController");

const router = express.Router();

router.post("/create", createProduct);  // For creating a product
router.get("/read", returnProducts);    // For reading products
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct)// delete Product
module.exports = router;
