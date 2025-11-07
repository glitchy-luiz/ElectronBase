const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendCloseApp: () => ipcRenderer.send('close-app')
});