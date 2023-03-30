const dbConnect = require("../utils/dbConnect")

const productCollection = dbConnect().db('geniusCar').collection('product');

module.exports.getProducts = async (req, res) => {
    const query = {}
    const cursor = productCollection.find(query)
    const product = await cursor.toArray();
    res.send(product)
}