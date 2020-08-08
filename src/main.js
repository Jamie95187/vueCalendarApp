import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAvgOBEE3-H9c2Ug6RNAVCR9p5rfB8UDX0",
  authDomain: "vue-calendar-aafbc.firebaseapp.com",
  databaseURL: "https://vue-calendar-aafbc.firebaseio.com",
  projectId: "vue-calendar-aafbc",
  storageBucket: "vue-calendar-aafbc.appspot.com",
  messagingSenderId: "322708768344",
  appId: "1:322708768344:web:185b72f4276f7675526c2d"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
