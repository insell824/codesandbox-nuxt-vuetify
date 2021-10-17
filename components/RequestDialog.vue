<template>
  <v-dialog :value="isOpen" @input="isOpen = $event" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <slot name="activator" :on="on" :attrs="attrs" />
    </template>
    <v-card tile>
      <v-card-title>
        <div>Dialog</div>
        <v-spacer />
        <v-btn large tile icon @click="isOpen = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <div class="mb-2 grey--text text--darken-1">
          There is a virtual delay of a few milliseconds. Let's check
          <code>~/server-middleware/router/index.js</code>.
        </div>
        <div v-if="isBusy" class="text-center">
          <v-progress-circular indeterminate color="primary" />
        </div>
        <div v-else-if="errorMessage" class="red--text">
          <v-icon color="red">mdi-alert</v-icon>
          {{ errorMessage }}
        </div>
        <div v-else>
          {{ message || '-' }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="getNow()" :disabled="isBusy">
          <v-icon left>mdi-refresh</v-icon>
          Reload
        </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    value: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isOpen: false,
      isBusy: false,
      message: '',
      errorMessage: '',
    }
  },
  watch: {
    isOpen: {
      immediate: false,
      handler(isOpen) {
        if (isOpen !== this.value) this.$emit('input', isOpen)
        if (isOpen) this.getNow()
      },
    },
  },
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    async getNow() {
      if (this.isBusy) return
      this.isBusy = true
      try {
        const { data } = await this.$axios.get('/api/now', {
          timeout: 10 * 1000,
        })
        if (!data.isSuccess) throw new Error(data.statusText)
        this.message = data.statusText
      } catch (err) {
        console.error(err)
        let errorMessages = []
        if (err?.message) errorMessages.push(err.message)
        if (err?.response?.data?.statusText) errorMessages.push(err.response.data.statusText)
        if (errorMessages.length === 0) errorMessages.push('Unknown Error.')
        this.errorMessage = errorMessages.join(', ')
      }
      this.isBusy = false
    },
  },
}
</script>
<style scoped>
</style>
