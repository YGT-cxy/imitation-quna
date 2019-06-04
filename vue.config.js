<<<<<<< HEAD
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
=======
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
>>>>>>> 抽离接口到api文件，增加serve端文件
};