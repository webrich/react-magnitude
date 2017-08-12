if (process.env.NODE_ENV === 'production') {
    module.exports = require('./build/webpack.prod.config.js');
} else {
    module.exports = require('./build/webpack.dev.config.js');
}