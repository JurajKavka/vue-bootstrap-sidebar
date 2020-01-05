import Vue from 'vue';
import Dev from '@/serve-dev.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
