import {app, BrowserWindow, ipcMain, nativeTheme} from 'electron'
import path from 'path'
import os from 'os'

// needed in case process is undefined under Linux
const platform = process.platform || os.platform()

try {
  if (platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(path.join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) {
}

let mainWindow

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 1300,
    height: 600,
    frame: false,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD)
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools()
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools()
    })
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.whenReady().then(()=>{
  ipcMain.on('showWinDialog', showWinDialog)
  createWindow()
})

app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

// windows dialog
function showWinDialog(event, options) {
  const childWindow = new BrowserWindow({
    parent: mainWindow,
    width: 500,
    height: 400,
    frame: false,
    useContentSize: true,
  })
  childWindow.loadURL(process.env.APP_URL + "/#" + options.url)
}
function closeWinDialog(event, options) {
  const childWindow = new BrowserWindow({
    parent: mainWindow,
    width: 500,
    height: 400,
    frame: false,
    useContentSize: true,
  })
  childWindow.loadURL(process.env.APP_URL + "/#" + options.url)
}
