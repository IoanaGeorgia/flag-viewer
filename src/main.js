import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from "vuex";

const store = createStore({
  state:{
    showDetails:false
  },
    mutations: {
    TOGGLE_DETAILS(state, newVal) {
      state.showDetails = newVal;
    },
  },
});
const app = createApp(App)

app.use(store);
app.use(router)

app.mount('#app')





