var config = {}
        // production environment config
        // server Config
        config.server = {};
        config.server.port = process.env.PORT || 8080;

module.exports = config;