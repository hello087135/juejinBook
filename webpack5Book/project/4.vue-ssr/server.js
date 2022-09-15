const express = require('express')
const path = require('path')
const {renderToString} = require('@vue/server-renderer')
const clientManifest = require("./dist/manifest-client.json");
const serverManifest = require("./dist/manifest-server.json");
// 打包后服务端代码路径
const serverBundle = path.join(__dirname, './dist', serverManifest['servers.js'])
const creteApp = require(serverBundle).default
const server = express()
// 静态资源
server.use(express.static(path.join(__dirname, './dist')))
server.listen(3000, () => {
    console.log('server is running at 3000')
})
server.get('/', async (req, res) => {
    const app = creteApp()
    // 渲染
    const html = await renderToString(app,)
    const clientBundle = path.join(__dirname, './dist', clientManifest['client.js'])
    res.send(`<!DOCTYPE html><html><head><title>Vue SSR Example</title></head><body>     <!-- 注入组件运行结果 --><div id="app">${html}</div><!-- 注入客户端代码产物路径 --><!-- 实现 Hydrate 效果 --><script src="${clientBundle}"></script></body></html>`);
})
