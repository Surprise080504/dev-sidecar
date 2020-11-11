import api, { apiInit } from './api'
import modules from './modules'
import status from './status'
export default {
  initApi: apiInit,
  async initPre (Vue, api) {
    Vue.prototype.$api = api
    const setting = await api.setting.load()
    Vue.prototype.$global = { setting }
    await status.install(api)
  },
  initModules (app) {
    modules.install(app, api)
  }
}
