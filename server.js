const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, /*{useNewUrlParser: true, useUnifiedTopology: true}*/
    async(err) => 
    {
        if(err) throw err;
    console.log("Connected to Database: " + `${process.env.DBNAME}`)}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

const productsRouter = require('./routes/Products');
const usersRouter = require('./routes/Users');
const sellerRouter = require('./routes/Seller');
const salesRouter = require('./routes/Sales');

app.use('/admin/products', productsRouter);
app.use('/admin/users', usersRouter);
app.use('/admin/seller', sellerRouter);
app.use('/admin/sales', salesRouter);