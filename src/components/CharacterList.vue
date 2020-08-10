<template>
  <v-row>
    <v-col>
      <ul>
        <li v-for="character of characters" :key="character.id">
          {{ character.id }} {{ character.name }}
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "CharacterList",
  props: {
    characters: {
      default: []
    }
  },
  setup() {
    return {};
  }
});
</script>
