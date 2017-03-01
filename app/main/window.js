import { BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

function createWindow () {

  let win = new BrowserWindow({width: 800, height: 600})

  win.loadURL(url.format({
    pathname: path.join(__dirname, '../render/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

export default createWindow
