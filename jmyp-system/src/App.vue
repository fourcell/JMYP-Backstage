<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import Login from "./pages/Login/login.vue";

export default {
  name: "app",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Login
  }
};
</script>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
</style>
