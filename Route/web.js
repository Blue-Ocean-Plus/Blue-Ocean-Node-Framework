const {siteName} = require("../Config/app");
const {compact} = require("../Vendor/Functions/template");
module.exports = {
    Route: {
        GET: {
            '/': (req, res) => {
                 // res.writeHead(200, {"Content-Type": "text/html"});
                 res.write(compact('./View/index.html', {'title': siteName}));
            }
        },
        POST: {}
    }
};