import express from 'express';
import {renderToString} from 'react-dom/server';
import App from './App.jsx';

const server = express();

// 通过manifest.json文件获取打包后的文件名
const clientManifest = require('../dist/manifest-client.json');

server.get('/', (req, res) => {
    // 将组件渲染成字符串
    const html = renderToString(<App/>);
    // 根据manifest.json文件获取相应的css和js文件
    const css = clientManifest['client.css'];
    const js = clientManifest['client.js'];
    // 返回拼接的html字符串
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="${css}">
        </head>
        <body>
            <div id="app">${html}</div>
            <script src="${js}"></script>
        </body>
        </html>
    `);
});
// 处理静态资源
server.use(express.static('./'));
// 监听端口
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
