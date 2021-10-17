<template>
  <v-app>
    <v-navigation-drawer v-model="isOpenDrawer" clipped fixed app>
      <v-list nav dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action class="mx-1">
              <v-icon small v-text="item.icon" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app elevate-on-scroll color="primary" dark dense>
      <v-app-bar-nav-icon @click.stop="isOpenDrawer = !isOpenDrawer" tile />
      <v-toolbar-title class="px-0">
        <span class="header-title-custom">{{ siteName }}</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  head() {
    return {}
  },
  components: {},
  middleware: [],
  data() {
    return {
      siteName: process.env.SITE_NAME || 'WEB SITE',
      isOpenDrawer: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Top Page',
          to: '/',
        },
      ],
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
.header-title-custom {
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 4px;
  display: inline-block;
}
</style>
