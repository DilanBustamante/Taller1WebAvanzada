<template>

  <v-app>
      <Principal/>
      <Register/>
      <Chat/>
  </v-app>
  
</template>

<script>
import Principal from './components/Principal.vue';
import Register from './components/Register';
import Chat from './components/Chat'


export default {
  name: 'App',
  components: {
    Principal,
    Register,
    Chat
    
    
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
