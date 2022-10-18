const { app, BrowserWindow } = require('electron')
app.whenReady().then(async () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })
    try {
        await win.loadFile('index.html')
        // if(process.env.MODE==="PRO"){
        //     await win.loadFile('index.html')
        // }else {
        //     await win.loadURL('http://localhost:8080')
        // }
    }catch (e) {
        console.log(e)
    }

})

