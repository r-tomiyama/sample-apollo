<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
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
          :search="search"
          no-data-text="データがありません"
          loading-text="読み込み中"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

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
    },
    search: {
      default: ""
    }
  },
  setup() {
    const headers = [
      { text: "名前", value: "name", width: "20%" },
      { text: "仕事", value: "work", width: "20%" },
      { text: "出演作", value: "appearsIn" }
    ];

    return { headers };
  }
});
</script>
