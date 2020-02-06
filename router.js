"use strict";
/*
 * check if routed handler function exists
 * if yes call it, else complain
 */
const handlers = require("./handlers");               // handlers module
const requestHandlers = {                             // application urls here
    "/": handlers.home,
    "/start": handlers.home,
    "/side": handlers.side,
    "/contact": handlers.side,
    "/about": handlers.side,
    "/notfound": handlers.notfound,
    "/frontpage": handlers.page,
    "/header": handlers.page,
    "/footer": handlers.page,
    "js": handlers.js,
    "css": handlers.css,
    "jpg": handlers.jpg,
    "png": handlers.png
}

module.exports = {
    route(req, res) {
        let arr = req.url.split(".");
        let ext = arr[arr.length - 1];
        if (typeof requestHandlers[req.url] === 'function') {  // look for route
            requestHandlers[req.url](req, res);                // if found use it
        } else if (typeof requestHandlers[ext] === "function") {
            requestHandlers[ext](req, res);
        } else {
            console.log("5: " + ext);
            requestHandlers["/notfound"](req, res);        // use notfound
        }
    }
}