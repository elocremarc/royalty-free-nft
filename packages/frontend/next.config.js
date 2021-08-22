// next.config.js
const withTM = require('next-transpile-modules')(['@usedapp/core']) // pass the modules you would like to see transpiled

module.exports = withTM()
