<template>
  <v-app>
      <Principal/>
  </v-app>
</template>

<script>
import Principal from './components/Principal.vue';


export default {
  name: 'App',
  components: {
    Principal
  },

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