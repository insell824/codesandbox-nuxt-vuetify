<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12">
        <v-card outlined tile>
          <v-card-title> Hello World </v-card-title>
          <v-card-text>
            <div>Hello Vuetify World!</div>
          </v-card-text>
          <v-card-actions>
            <RequestDialog v-model="isOpen">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" elevation="0" color="primary">Request</v-btn>
              </template>
            </RequestDialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import RequestDialog from '~/components/RequestDialog.vue'
export default {
  head() {
    return {
      title: 'Top',
    }
  },
  layout: 'default',
  components: {
    RequestDialog,
  },
  middleware: [],
  data() {
    return {
      isOpen: false,
    }
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>
<style scoped>
</style>