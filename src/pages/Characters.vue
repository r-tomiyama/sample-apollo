<template>
  <v-container>
    <H1>キャラクター一覧</H1>
    <CharacterList
      :characters="characters"
      :loading="loading"
      @refetch-list="refetchList"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import { useGetCharacters } from "@/graphql/query/characters";
import { useResult } from "@vue/apollo-composable";
import CharacterList, { Filter } from "../components/CharacterList.vue";
import { WORK } from "../graphql/__generated__/globalTypes";
import {
  getCharacters_characters,
  getCharactersVariables
} from "@/graphql/query/__generated__/getCharacters";
export class CharacterItem {
  public id: string;
  public name: string;
  public work: WORK | "-";
  public appearsIn: string[];
  constructor(model: getCharacters_characters) {
    this.id = model.id;
    this.name = model.name;
    this.work = model.work ? model.work : "-";
    this.appearsIn = model.appearsIn.map(v => v.name);
  }
}
export default defineComponent({
  name: "Characters",
  components: {
    CharacterList
  },
  setup() {
    const { result, loading, refetch } = useGetCharacters({
      name_contains: ""
    });
    const charactersResult = useResult(result, null);
    const characters = computed(() =>
      charactersResult.value?.map(v => {
        return new CharacterItem(v);
      })
    );
    function refetchList(filter: Filter) {
      const params: getCharactersVariables = {
        name_contains: filter.name
      };
      refetch(params);
    }
    return {
      characters,
      loading,
      refetchList
    };
  }
});
</script>
