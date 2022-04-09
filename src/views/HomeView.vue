<template>
  <main>
    <v-container id="input-usage" fluid>
      <v-row>
        <v-col cols="12">
          <v-text-field label="Enter package name (jquery, vue, etc...)" @change="search" />
        </v-col>
        <v-col>
          <v-data-table :headers="headers" :items="packages" :items-per-page="10" @click:row="openDialog" />
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" :max-width="500" persistent @click:outside="closeDialog">
      <v-card>
        <v-card-title class="headline width-auto">{{ package.name }}</v-card-title>
        <v-card-text><strong>version:</strong> {{ package.version }}</v-card-text>
        <v-card-text><strong>homepage:</strong> {{ package.links?.homepage }}</v-card-text>
        <v-card-text><strong>repository:</strong> {{ package.links?.repository }}</v-card-text>
        <v-card-text><strong>npm:</strong> {{ package.links?.npm }}</v-card-text>
        <v-card-text><strong>description:</strong> {{ package.description }}</v-card-text>
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dialog: false,
      package: {},
      headers: [
        { text: 'name', align: 'start', value: 'package.name', sortable: false},
        { text: 'author', value: 'package.author.name', sortable: false },
        { text: 'description', value: 'package.description', sortable: false }
      ],
    }
  },
  computed: {
    ...mapGetters(['packages'])
  },
  methods: {
    async search(val) {
      this.$store.dispatch('getSearchResult', val)
    },
    openDialog(e) {
      this.package = e.package
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    }
  }
}
</script>

<style lang="scss">
</style>