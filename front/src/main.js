import Vue from 'vue'
import App from './App.vue'
import router from './router'
import provedor from './provedor'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Como estamos usando webpack nao precisamos colocar a extensão do arquivo
// E como o arquivo que queremos acessar é chamado de 'index' não precisamos nomea-lo no arquivo abaixo
import http from '@/http'

Vue.config.productionTip = false

// Definindo uma variavel global para dentro do Vue
Vue.prototype.$http = http;

new Vue({
  router,
  store: provedor,
  render: h => h(App)
}).$mount('#app')
