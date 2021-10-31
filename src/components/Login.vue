<template>
  <div>
    <v-text-field
      label="Username"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field label="Password"></v-text-field>
    <a>Registrarse</a>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      user: 'Daniela',
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
    methods:{
        getUser(){
            this.$emit(this.user,'getUser');
        }
    }
  }

</script>

<style lang="scss" scoped>

</style>
