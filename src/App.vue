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

