<template>
  <v-container>
    <H1>キャラクター一覧</H1>
    <CharacterList :characters="charactersResult" />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useGetCharacters } from "@/graphql/query/characters";
import { useResult } from "@vue/apollo-composable";
import CharacterList from "../components/CharacterList.vue";

export default defineComponent({
  name: "Characters",
  components: {
    CharacterList
  },
  setup() {
    const { result } = useGetCharacters();
    const charactersResult = useResult(result, null);

    return {
      charactersResult
    };
  }
});
</script>
