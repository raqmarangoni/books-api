const basicAuth = require('basic-auth');

const validCredentials = { username: 'admin', password: '123456' };
const auth = (req, res, next) => {
    const user = basicAuth(req);
    if (!user || !checkCredentials(user.name, user.pass)) {
        res.set('WWW-Authenticate', 'Basic realm="Authorization Required"');
        return res.status(401).send('Authentication failed. Please provide valid credentials.');
    }

    next();
};

const checkCredentials = (username, password) => {
    return username === validCredentials.username && password === validCredentials.password;
};

module.exports = auth;
