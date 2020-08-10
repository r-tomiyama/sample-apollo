<template>
  <v-app>
    <NavBar :user-name="userName" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar
  },
  setup() {
    const userName = "test";
    return {
      userName
    };
  }
});
</script>
