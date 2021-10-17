<template>
  <div>Component</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {},
  middleware: [],
  props: {
    prop1: {
      type: Number,
      required: false,
      default: 100,
    } as Vue.PropOptions<number>,
    prop2: {
      type: Object,
      default() {
        return {}
      },
    } as Vue.PropOptions<any>,
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
})
</script>
<style scoped></style>