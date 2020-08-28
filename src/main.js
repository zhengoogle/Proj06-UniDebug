import Vue from 'vue'
import App from './App'
import ZZBorderBox from './components/box/ZZBorderBox/index'

Vue.config.productionTip = false

Vue.use(ZZBorderBox)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
