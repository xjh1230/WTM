const proxy = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(proxy('/api', {
        target: 'http://118.178.132.249:7778/',
        //target: 'http://localhost:57911/',
        changeOrigin: true,
        logLevel: "debug"
    }));
};