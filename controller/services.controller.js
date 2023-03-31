const { ObjectId } = require("mongodb");
const dbConnect = require("../utils/dbConnect");

const serviceCollection = dbConnect().db('geniusCar').collection('services');

module.exports.getServices = async (req, res) => {
    const query = {}
    const cursor = serviceCollection.find(query)
    const services = await cursor.toArray();
    res.send(services)
}

module.exports.getSingleServices = async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) }
    const service = await serviceCollection.findOne(query);
    res.send(service)
}