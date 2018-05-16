import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import {store} from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue';
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue';
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue';
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue';
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue';
Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
Vue.config.productionTip = false
Vue.filter('date',DateFilter)
Vue.component('app-alert',AlertCmp);
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog);
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog);
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog);
Vue.component('app-meetup-register-dialog',RegisterDialog);
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
    }
  
});
