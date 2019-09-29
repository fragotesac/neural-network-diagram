import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    hiddenLayers: [{
      neurons: 1
    }]
  },
  methods: {
    addHiddenLayers: function(){
      this.hiddenLayers.push({
        neurons: 1
      })
    }
  }
}).$mount('#app')
