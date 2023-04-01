const { ObjectId } = require("mongodb");
const dbConnect = require("../utils/dbConnect")

const productCollection = dbConnect().db('geniusCar').collection('product');

module.exports.getProducts = async (req, res) => {
    const query = {}
    const cursor = productCollection.find(query)
    const product = await cursor.toArray();
    res.send(product)
}
module.exports.getSingleProduct = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const product = await productCollection.findOne(query);
    res.send(product)
}