const http = require('http');
const {siteName} = require("./Config/app");
const {compact} = require("./Vendor/Functions/template");
const {Route} = require("./Route/web");
const {Domain, PortListen} = require("./Config/app");


http.createServer((req, res) => {

    let p404 = compact('./View/404.html');

    // check method
    if (!Route.hasOwnProperty(req.method)) {
        res.writeHead(404, {"Content-Type": "text/html"});
        return res.end(p404);
    }

    // check url
    if (!Route[req.method].hasOwnProperty(req.url)) {
        res.writeHead(404, {"Content-Type": "text/html"});
        return res.end(p404);
    }

    Route[req.method][req.url](req, res);
    
}).listen(PortListen, Domain);