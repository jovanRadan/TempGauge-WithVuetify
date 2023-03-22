import Vue from 'vue'
import './plugins/vuetify'
import Application from "./Application";

Vue.config.productionTip = false

new Vue({
    render: h => h(Application)
}).$mount('#app')
