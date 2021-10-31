<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
 .v-application{
    background: rgba(87, 189, 20, 0.11) !important;
 }
</style>
