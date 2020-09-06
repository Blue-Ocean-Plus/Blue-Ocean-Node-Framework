const {home} = require("../Controller/HomeController");

module.exports = {
    Route: {
        GET: {
            '/': home
        },
        POST: {}
    }
};