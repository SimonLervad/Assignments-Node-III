'use strict';
/*
 * handlers.js
 * Requesthandlers to be called by the router mechanism
 */
const fs = require("fs");                           // file system access
const httpStatus = require("http-status-codes");    // http sc

module.exports = {
    home(req, res) {
        let path = "views/index.html";
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "text/html; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    },
    side(req, res) {
        let path = "views" + req.url + ".html";
        fs.readFile(path, function(err, data) {
            if (err) {
                console.log(`Not found file: ${path}.`);
            }
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "text/html; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
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
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "application/javascript; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
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
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "text/css; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
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
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "image/png"
            });
            console.log(`served routed file: ${path}.`);
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
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "image/jpg"
            });
            console.log(`served routed file: ${path}.`);
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
            res.writeHead(httpStatus.OK, {      // yes, write header
                "Content-Type": "text/html; charset=utf-8"
            });
            console.log(`served routed file: ${path}.`);
            res.write(data);
            res.end();
        });
    }
}