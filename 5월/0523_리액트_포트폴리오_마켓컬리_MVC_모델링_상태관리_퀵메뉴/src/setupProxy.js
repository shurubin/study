const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = (WrapComponent) =>{
    WrapComponent.use(
        "/signup_db",
        createProxyMiddleware({
            "target":"http://susubini03.dothome.co.kr",
            changeOrigin: true
        })
    )
    WrapComponent.use(
        "/jsp",
        createProxyMiddleware({
            "target":"http://localhost:8080",
            changeOrigin: true
        })
    )
    // WrapComponent.use(
    //     "/asp",
    //     createProxyMiddleware({
    //         "target":"http://localhost:8080",
    //         changeOrigin: true
    //     })
    // )
}