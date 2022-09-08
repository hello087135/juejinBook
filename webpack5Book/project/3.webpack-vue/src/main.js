import Vue from "vue";
import App from "./component/test/index.vue";
Vue.config.productionTip = false;
console.log(__dirname);
new Vue({
    components: { App },
    render: (h) => h(App),
}).$mount("#app");
