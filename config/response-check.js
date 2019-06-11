

// const repondeCheck = (app) => {
    
//     (req, res, next) {
//         if (req.method === 'GET') {
//             res.end('GET method not supported');
//         } else {
//             //  next();
//             res.end('GET method supported');
    
//         }
// }

// module.exports = repondeCheck
// };


//  _ = require('underscore');
// var middleware = require('../middleware');

// function applyAuthentication(app, routesToSecure) {
//   for (var verb in app.routes) {
//       var routes = app.routes[verb];
//       routes.forEach(patchRoute);
//   }

//   function patchRoute (route) {
//       var apply = _.any(routesToSecure, function (r) {
//           return route.path.indexOf(r) === 0;
//       });

//       var guestAccess = _.any(route.callbacks, function (r) {
//           return r.name === 'guest';
//       });

//       if (apply && !guestAccess) {
//           route.callbacks.splice(0, 0, middleware.access.authenticatedAccess());
//       }
//   }
// }

// module.exports = applyAuthentication;