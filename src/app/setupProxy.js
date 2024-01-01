const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    'http://localhost:3000/checkrates',
    createProxyMiddleware({
      target: 'https://client.forthcrm.com/post/7d7608ca21470e510d0133cec99649d218661c5c',
      changeOrigin: true,
      secure: true,
    })
  );
};