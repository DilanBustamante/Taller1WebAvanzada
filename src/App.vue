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

<style scoped>
 .v-application{
   background: linear-gradient(to bottom, rgb(7, 7, 85), white) !important;
 }
</style>

