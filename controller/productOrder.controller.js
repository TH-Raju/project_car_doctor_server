const { ObjectId } = require("mongodb");
const dbConnect = require("../utils/dbConnect");

const productOrderCollection = dbConnect().db('geniusCar').collection('productOrders');

module.exports.postProductOrder = async (req, res) => {
    const productOrder = req.body;
    const result = await productOrderCollection.insertOne(productOrder)
    res.send(result)
}
module.exports.getProductOrder = async (req, res) => {
    let query = {}
    if (req.query.email) {
        query = {
            email: req.query.email
        }
    }
    const cursor = productOrderCollection.find(query)
    const productOrders = await cursor.toArray();
    res.send(productOrders)
}

module.exports.deleteProductOrder = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await productOrderCollection.deleteOne(query);
    res.send(result)
}

module.exports.patchProductOrder = async (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    const query = { _id: new ObjectId(id) }
    const updatedDoc = {
        $set: {
            status: status
        }
    }
    const result = await productOrderCollection.updateOne(query, updatedDoc);
    res.send(result)
}