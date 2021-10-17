<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card outlined tile>
          <v-card-title>{{ cardTitle }}</v-card-title>
          <v-card-subtitle>{{ cardSubtitle }}</v-card-subtitle>
          <v-divider />
          <v-card-text>
            <p>If you experience this issue multiple times, please contact your administrator.</p>
            <v-btn v-if="error.statusCode !== 404" dark @click="reload()" elevation="0">Reload</v-btn>
            <v-btn dark to="/" elevation="0">Top Page</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      titleTemplate: '%s',
      title: this.error?.statusCode === 404 ? '404 Not Found' : 'Error',
    }
  },
  computed: {
    cardTitle() {
      if (this.error?.statusCode === 404) return 'The page was not found.'
      return 'An error occurred while processing your request.'
    },
    cardSubtitle() {
      if (this.error?.message) return this.error.message
      return ''
    },
  },
  methods: {
    reload() {
      window.location.reload()
    },
  },
}
</script>


