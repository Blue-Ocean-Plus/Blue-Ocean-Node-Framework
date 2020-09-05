const {dbs} = require("../../Config/database");
const MongoClient = require('mongodb').MongoClient;

// create db mongo
dbs.map(database => {
    MongoClient.connect(database.url, {useUnifiedTopology: false}, (err, Mdb) => {
        if (err) throw err;

        database.db.map((db) => {
            let dbm = Mdb.db(db.name);
            console.log("Database created!");

            db.collection.map(collection => {

                dbm.createCollection(collection.name, function (err, res) {
                    if (err) throw err;
                    console.log(`Collection ${collection.name} created!`);
                });

                // index field
                if (collection.indexField.length) {
                    collection.indexField.map(index => {
                        dbm.collection(collection.name).createIndex(index, {unique: false});
                    })
                }
            })

        });

        Mdb.close();
    });
});
