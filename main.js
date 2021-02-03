const { app, BrowserWindow } = require('electron');
const HID = require('node-hid');

let devices=HID.devices();
console.log(devices);

let win;

function createWindow(){

    win=new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false
        },
        width:600,
        height:600
    })

    // win.loadURL(`file://${__dirname}/dist/index.html`)

    win.loadFile('dist/app01/index.html');

    win.webContents.openDevTools();

    win.on('closed',function(){
        win=null;
    })
}

app.on('ready',createWindow)

app.on('window-all-closed',function(){
    if(process.platform!=='darwin'){
        app.quit();
    }
})

app.on('activate',function(){
    if(win===null){
        createWindow()
    }
})