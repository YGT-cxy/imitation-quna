module.exports = {
    devServer: {
        port: 8000,
        proxy: {
            '/travel': {
                target: 'http://localhost:8888',
                changeOrigin: true,  //是否跨域
                // pathRewrite: {
                //     '^/api': '/mock'
                // }
            },
            '/showcity': {
                target: 'http://localhost:8888',
                changeOrigin: true
            },
            '/weekend': {
                target: 'http://localhost:8888',
                changeOrigin: true
            },
            'detail': {
                target: 'http://localhost:8888',
                changeOrigin: true
            }
        }
    },
    publicPath: './',
    assetsDir: ''
};