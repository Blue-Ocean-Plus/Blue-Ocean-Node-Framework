// after complete run "npm run database"
module.exports = {
    dbs: [
        {
            url: 'mongodb://localhost:27017/',
            db: [
                {
                    name: 'license',
                    collection: [
                        {
                            name: 'license',
                            indexField: [{"site_url": 1, "product": 1}, {"site_url": 1, "product": 1, "status": 1}]
                        }
                    ]
                }
            ]
        }
    ]
};