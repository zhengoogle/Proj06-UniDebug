import Vue from 'vue'
import App from './App'
import './static/css/common.css'
import zzBorderBox from './components/box/ZZBorderBox/ZzBorderBox.vue'

Vue.config.productionTip = false

// Vue.use(ZzBorderBox) // 不支持？
Vue.component('zz-border-box', zzBorderBox)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
