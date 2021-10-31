<template>
  <v-app>
      <Principal/>
      <Register/>
  </v-app>
</template>

<script>
import Principal from './components/Principal.vue';
import Register from './components/Register';


export default {
  name: 'App',
  components: {
    Principal,
    Register
    
    
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
