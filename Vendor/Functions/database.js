const {dbName} = require("../../Config/database");
const mongodb = require('mongodb');

module.exports = {
    DBInsert: (data, collectionName, qUpdate) => {
        mongodb.MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
            if (err) return console.log("connect mongodb failed");

            let dbm = db.db(dbName);

            dbm.collection(collectionName).findOne(qUpdate, function (err, result) {
                if (err) return console.log("Find failed");

                if (result) {

                    data.updated_at = data.date;
                    delete data.date;
                    let update = {$set: data};

                    dbm.collection(collectionName).updateOne(qUpdate, update, function (err, res) {
                        if (err) return console.log(err);
                        console.log("1 document updated");
                        db.close();
                    });
                } else {
                    dbm.collection(collectionName).insertOne(data, function (err, res) {
                        if (err) return console.log(err);
                        console.log("1 document inserted");
                        db.close();
                    });
                }


            });

        });
    },
    DBFind:()=>{

    }
};