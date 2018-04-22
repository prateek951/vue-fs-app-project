import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import {store} from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue';
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date',DateFilter)
Vue.component('app-alert',AlertCmp);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAOLUqy2iT3TMHldAj5oKUP0Oa-vdqOaas",
      authDomain: "vuefs-prod-e708a.firebaseapp.com",
      databaseURL: "https://vuefs-prod-e708a.firebaseio.com",
      projectId: "vuefs-prod-e708a",
      storageBucket: "vuefs-prod-e708a.appspot.com"
    });
  }
})
