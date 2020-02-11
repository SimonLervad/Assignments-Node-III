'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the router mechanism
 */
const fs = require("fs");                               // file system access
const httpStatus = require("http-status-codes");        // http sc
const lib = require("../private/libWebUtil");           // home grown utilities
const experimental = require("../private/myTemplater"); // highly experimental template

module.exports = {
    home(req, res) {
        let path = req.url;
        if (path === "/" || path === "/start") {
            path = "/index";
        }
        path = "views" + path + ".html";
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }
            res.writeHead(httpStatus.OK, {              // yes, write relevant header
                "Content-Type": "text/html; charset=utf-8"
            });
            res.write(data);
            res.end();
        });
    },
    js(req, res) {
        let path = "public/js" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }
            res.writeHead(httpStatus.OK, {              // yes, write relevant header
                "Content-Type": "application/javascript; charset=utf-8"
            });
            res.write(data);
            res.end();
        });
    },
    css(req, res) {
        let path = "public/css" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}`);
            }
            res.writeHead(httpStatus.OK, {              // yes, write relevant header
                "Content-Type": "text/css; charset=utf-8"
            });
            res.write(data);
            res.end();
        });
    },
    png(req, res) {
        let path = "public/images" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}`);
            }
            res.writeHead(httpStatus.OK, {              // yes, write relevant header
                "Content-Type": "image/png"
            });
            res.write(data);
            res.end();
        });
    },
    jpg(req, res) {
        let path = "public/images" + req.url;
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}`);
            }
            res.writeHead(httpStatus.OK, {              // yes, write relevant header
                "Content-Type": "image/jpg"
            });
            res.write(data);
            res.end();
        });
    },
    notfound(req, res) {
        let path = "views/notfound.html";
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }
            res.writeHead(httpStatus.OK, {              // yes, write relevant header
                "Content-Type": "text/html; charset=utf-8"
            });
            res.write(data);
            res.end();
        });
    },
    receiveData(req, res, data) {
        let obj = lib.makeWebArrays(req, data);         // home made GET and POST objects
        res.writeHead(httpStatus.OK, {                  // yes, write relevant header
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(experimental.receipt(obj));           // home made templating for native node
    }
}