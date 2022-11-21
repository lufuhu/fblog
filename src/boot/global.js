import { boot } from 'quasar/wrappers'

function ipcSend(event, data){
  if(!data){
    data = {};
  }
  data.event = event
  console.log(data)
  window.eAPI.ipcSend(data);
}
export default boot(({ app }) => {
  app.config.globalProperties.$ipcSend = ipcSend
})
