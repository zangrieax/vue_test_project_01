"use strict";

import Vue from "vue";
import VueMaterial from "vue-material";
import router from "./router/index";
import store from "./store/index";
import { sync } from "vuex-router-sync";
import App from "./pages/App.vue";

sync(store, router);

//Глобальный импорпт, грязно, но быстро
Vue.use(VueMaterial);

// eslint-disable-next-line no-new
new Vue({
	el: "#root",
	store,
	router,
	render: (h) => {
		return h(App);
	},
});
