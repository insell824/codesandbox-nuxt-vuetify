<template>
  <div>Component</div>
</template>
<script>
export default {
  components: {},
  middleware: [],
  props: {
    prop1: {
      type: Number,
      required: false,
      default: 100,
    },
    prop2: {
      type: Object,
      default() {
        return {}
      },
    },
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
}
</script>
<style scoped>
</style>
