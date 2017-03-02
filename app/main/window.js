import { BrowserWindow, screen } from 'electron'
import path from 'path'
import url from 'url'

function createWindow () {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const winWidth = 100
  const winHeight = 80
  let win = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    x: (width - winWidth) / 2,
    y: 100,
    resizable: false,
    frame: false
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '../render/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

export default createWindow
