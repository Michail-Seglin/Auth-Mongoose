const jwt = require('jsonwebtoken');

function createToken(data) {
    const token = jwt.sign(JSON.stringify(data), 'secret');
    return token;
}
module.exports = createToken;