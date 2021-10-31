<template>
    <div>
        Welcome to foro, please login or register.
        <Login />
    </div> 
</template>
<script>
import Login from './Login.vue';
export default {
    name: 'Principal',
    components: {
      Login
    }
}
</script>