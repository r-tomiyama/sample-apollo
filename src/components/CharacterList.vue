<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="filter.name"
            clearable
            hint="キーワードを入力してEnterで絞り込み"
            label="名前"
            @keydown.enter="filterAndRefetch"
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="characters"
          :items-per-page="5"
          :footer-props="{
            showFirstLastPage: true
          }"
          :loading="loading"
          no-data-text="データがありません"
          loading-text="読み込み中"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext } from "@vue/composition-api";
export interface Filter {
  name?: string;
}
export default defineComponent({
  name: "CharacterList",
  props: {
    characters: {
      default: () => []
    },
    loading: {
      default: false
    },
    total: {
      default: 0
    }
  },
  setup(_, context: SetupContext) {
    const headers = [
      { text: "名前", value: "name", width: "20%" },
      { text: "仕事", value: "work", width: "20%" },
      { text: "出演作", value: "appearsIn" }
    ];
    const filter = reactive({
      name: "",
      work: undefined
    });
    function filterAndRefetch() {
      context.emit("refetch-list", filter);
    }
    return { headers, filter, filterAndRefetch };
  }
});
</script>
