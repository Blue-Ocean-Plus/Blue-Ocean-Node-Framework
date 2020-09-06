const {compact} = require("../Functions/template");
const {siteName} = require("../Config/app");


const home = (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(compact('./View/index.html', {'title': siteName}));
    res.end();
};

module.exports = {home};