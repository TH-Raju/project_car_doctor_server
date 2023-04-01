const express = require('express')
const cors = require('cors');
const router = require('./routes/services.route');
const dbConnect = require('./utils/dbConnect');
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const serviceRoute = require('./routes/services.route')
const productRoute = require('./routes/product.route')
const serviceOrderRoute = require('./routes/serviceOrder.route')
const productOrderRoute = require('./routes/productOrder.route')


// middleware
app.use(cors());
app.use(express.json());

// DB
dbConnect();


// Route
app.use("/services", serviceRoute)
app.use("/product", productRoute)
app.use("/serviceOrders", serviceOrderRoute)
app.use("/productOrders", productOrderRoute)


app.get('/', (req, res) => {
    res.send("Server Working...")
})
app.listen(port, () => {
    console.log(`Server Running on ${port} port...`)
})