import { BrowserWindow, screen } from 'electron'
import path from 'path'
import url from 'url'

function createWindow () {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const winWidth = 100
  const winHeight = 80
  let tipsWin = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    x: (width - winWidth) / 2,
    y: 100,
    resizable: false,
    frame: false,
    alwaysOnTop: true
  })

  tipsWin.loadURL(url.format({
    pathname: path.join(__dirname, '../render/Tips.html'),
    protocol: 'file:',
    slashes: true
  }))

  tipsWin.on('closed', () => {
    tipsWin = null
  })
}

export default createWindow
