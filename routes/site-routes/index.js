'use strict';
let fs = require('fs');
const express = require('express');
let app = express();


let routingLinks = {
    'route-app1.js': '_1',
    'route-app2.js': '_2'
}

// function configureRoutes(url, routes) {
//     console.log(url, routes);
//     routes.stack.forEach(function(r){
//         console.log('r',r)
//         if (r.route && r.route.path){
//           console.log(r.route.path)
//         }
//       })
// }

module.exports = () => {
    fs.readdirSync(__dirname).forEach((file) => {
        if (file == "index.js") return;
        app.use(`/${routingLinks[file]}`, require('./' + file));
    });
    return app;
};