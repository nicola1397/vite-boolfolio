<script>
import AppHeader from "./components/AppHeader.vue";
// import AppShop from "./components/AppShop.vue";
import AppFooter from "./components/AppFooter.vue";
// import AppDetail from "./components/AppDetail.vue";

import { api, store } from "./store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      
    };
  },
  methods: {
    fetchCards() {
      axios.get(`${api.serverURI}/projects`).then((res) => {
      store.projects = res.data.results.data;
      store.pagination = res.data.results.links;
      });
    },
  },
  created() {
    this.fetchCards();
  },

  components: { AppHeader, AppFooter,  },
};
</script>
<template>
  <AppHeader
    :navBar="store.navLinks"
    :logo="store.logo"
    :icons="store.shopIcons"
  ></AppHeader>
  <router-view></router-view>
  <!-- <AppShop :showcase="store.projects"></AppShop> -->
  <!-- <AppModal v-if="store.modal.showModal"></AppModal> -->
  <!-- <AppDetail></AppDetail> -->
  <AppFooter
    :legal="store.footerLegalLinks"
    :social="store.footerSocialLinks"
  ></AppFooter>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
</style>
