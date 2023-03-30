const dbConnect = require("../utils/dbConnect");

const serviceCollection = dbConnect().db('geniusCar').collection('services');

module.exports.getServices = async (req, res) => {
    const query = {}
    const cursor = serviceCollection.find(query)
    const services = await cursor.toArray();
    res.send(services)
}