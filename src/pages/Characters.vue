<template>
  <v-container>
    <H1>キャラクター一覧</H1>
    <CharacterList :characters="characters" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import CharacterList from "../components/CharacterList.vue";

export default defineComponent({
  name: "Characters",
  components: {
    CharacterList
  },
  setup() {
    const characters = [
      { id: 1, name: "hoge" },
      { id: 2, name: "fuga" }
    ];
    return {
      characters
    };
  }
});
</script>
