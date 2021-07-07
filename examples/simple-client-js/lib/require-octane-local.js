const requireOctaneLocal = function() {
    return require('../../../build/main/lib/index.js')(process.env.OCTANE_API_KEY, {
        host: process.env.OCTANE_API_HOST,
        port: process.env.OCTANE_API_PORT,
        protocol: process.env.OCTANE_API_PROTOCOL,
    });
}();

module.exports = requireOctaneLocal
module.exports.default = requireOctaneLocal
