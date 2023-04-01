const { ObjectId } = require("mongodb");
const dbConnect = require("../utils/dbConnect");

const serviceOrderCollection = dbConnect().db('geniusCar').collection('orders');

module.exports.postserviceOrder = async (req, res) => {
    const serviceOrder = req.body;
    const result = await serviceOrderCollection.insertOne(serviceOrder)
    res.send(result)
}
module.exports.getserviceOrder = async (req, res) => {
    let query = {}
    if (req.query.email) {
        query = {
            email: req.query.email
        }
    }
    const cursor = serviceOrderCollection.find(query)
    const serviceOrders = await cursor.toArray();
    res.send(serviceOrders)
}

module.exports.deleteserviceOrder = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const result = await serviceOrderCollection.deleteOne(query);
    res.send(result)
}

module.exports.patchserviceOrder = async (req, res) => {
    const id = req.params.id;
    const status = req.body.status;
    const query = { _id: new ObjectId(id) }
    const updatedDoc = {
        $set: {
            status: status
        }
    }
    const result = await serviceOrderCollection.updateOne(query, updatedDoc);
    res.send(result)
}