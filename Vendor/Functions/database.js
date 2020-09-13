const {MongoClient} = require("mongodb");


module.exports = {
    DBInsert: (data, collectionName, qUpdate) => {
    },
    DBFindOne: async (conn = "mongodb://localhost:27017/", dbName, collectionName, where = {}, option = {}) => {
        const client = new MongoClient(conn);

        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const result = await collection.findOne(where, option);

        // const response = result.toArray();

        await client.close();

        return result;
    }
};