const fs = require('fs');

function userLog(req, res, next) {
    fs.appendFileSync('src/logs/userLogs.txt', `El usuario ingresó a la ruta: ${req.url}\n`)
    next()
}


module.exports = userLog;