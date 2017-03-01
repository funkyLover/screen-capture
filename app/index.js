import { app, globalShortcut, dialog } from 'electron'
import capture from './main/capture.js'

app.on('ready', () => {
  // set tasksbar icon & set short cut
  let short = 'Cmd+Shift+1'
  // @NOTE: isRegistered just check the shortcut registered by this app
  let shortcut = !globalShortcut.isRegistered(short) && globalShortcut.register(short, capture)
  if (!shortcut) {
    dialog.showErrorBox('Error!', 'error occur when register shortcut!')
  }
})

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  capture()
})
