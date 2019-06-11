// let allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     if (req.method === "OPTIONS") res.send(200);
//     next();
// }

module.exports = (app) => {
    //app.use(allowCrossDomain);
}