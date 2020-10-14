require('dotenv').config();

module.exports = require(`./${process.env.NODE_ENV === 'production' ? 'build' : 'src'}/app.js`);
