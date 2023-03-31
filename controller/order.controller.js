const { ObjectId } = require("mongodb");
const dbConnect = require("../utils/dbConnect");

const orderCollection = dbConnect().db('geniusCar').collection('orders');

module.exports.postOrder = async (req, res) => {
    const order = req.body;
    const result = await orderCollection.insertOne(order)
    res.send(result)
}
module.exports.getOrder = async (req, res) => {
    let query = {}
    if (req.query.email) {
        query = {
            email: req.query.email
        }
    }
    const cursor = orderCollection.find(query)
    const orders = await cursor.toArray();
    res.send(orders)
}

module.exports.deleteOrder = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await orderCollection.deleteOne(query);
    res.send(result)
}

module.exports.patchOrder = async (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    const query = { _id: new ObjectId(id) }
    const updatedDoc = {
        $set: {
            status: status
        }
    }
    const result = await orderCollection.updateOne(query, updatedDoc);
    res.send(result)
}