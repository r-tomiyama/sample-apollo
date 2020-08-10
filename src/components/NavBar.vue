<template>
  <v-app-bar app color="primary" flat>
    <div class="d-flex align-center">
      <v-btn depressed text @click="goToHome">
        <img
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          width="20"
          height="20"
          alt="sample"
        />
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <!-- TODO: ログイン有無で出し分け -->
    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed text v-bind="attrs" v-on="on">
          <v-chip text-color="secondary">
            {{ userName }}
            <v-icon>mdi-chevron-down</v-icon>
            <v-icon large>mdi-account-circle</v-icon>
          </v-chip>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>マニュアル</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>ログアウト</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from "@vue/composition-api";

export default defineComponent({
  props: {
    userName: {
      type: String,
      default: ""
    }
  },
  setup(_, context: SetupContext) {
    function goToHome() {
      context.root.$router.push(
        { name: "home" },
        () => {
          /* do nothing. */
        },
        () => {
          /* do nothing. */
        }
      );
    }
    return {
      goToHome
    };
  }
});
</script>
