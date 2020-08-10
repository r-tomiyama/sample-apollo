import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueCompositionApi, { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./vue-apollo";

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  setup: function() {
    provide(DefaultApolloClient, apolloClient);
    return {};
  },
  render: h => h(App)
}).$mount("#app");
