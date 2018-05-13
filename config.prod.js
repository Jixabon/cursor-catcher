var config = {}
        // production environment config
        // server Config
        config.server = {};
        config.server.port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8000;
        config.server.ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

module.exports = config;