require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const productRouter = require("./routes/productRoute");

// Define a simple route
const PORT = process.env.PORT || 3000; // Set a default port

// Database connection
const db = process.env.MONGO_URI;
mongoose.connect(db, {
   
})
.then(() => {
    console.log("Connected to database");
})
.catch((err) => {
    console.log("Database connection error:", err);
});

// Routes
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
