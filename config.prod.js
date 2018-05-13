var config = {}
        // production environment config
        // server Config
        config.server = {};
        config.server.port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
        config.server.ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

module.exports = config;