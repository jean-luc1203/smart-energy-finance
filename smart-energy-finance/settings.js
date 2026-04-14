const path = require("path");

module.exports = {
    uiPort: process.env.PORT || 1894,
    uiHost: "0.0.0.0",

    flowFile: "flows.json",
    flowFilePretty: true,

    userDir: "/data",
    nodesDir: "/opt/node_modules",

    credentialSecret: false,

    adminAuth: {
        type: "credentials",
        users: [{
            username: "pi",
            password: "$2a$12$fTPLydFlFsX7N6x8zqbnke7eIGdXDHWp4uzzqSdpOJClmFDEw1Ifu",
            permissions: "*"
        }]
    },

    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,

    contextStorage: {
        default: "memory",
        memory: { module: "memory" },
        persistent: {
            module: "localfilesystem",
            config: {
                dir: path.join("/data", "context"),
                flushInterval: 30
            }
        }
    },

    functionGlobalContext: {
        fs: require("fs"),
        path: require("path"),
        os: require("os"),
        crypto: require("crypto")
    },

    exportGlobalContextKeys: false,

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },

    editorTheme: {
        projects: {
            enabled: false
        }
    },

    diagnostics: {
        enabled: false,
        ui: false
    },

    runtimeState: {
        enabled: false,
        ui: false
    }
};
