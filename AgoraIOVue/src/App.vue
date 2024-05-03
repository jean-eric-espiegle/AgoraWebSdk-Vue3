
<template>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: { 
    RouterView ,
  }
};
</script>

<style>
body{
  width: 100vw;
  height: 100vh;
  margin: 0;
}

#app{
  width: 100%;
  height: 100%;
  background-color: #005D9A;
}
</style>
