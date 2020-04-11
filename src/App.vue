<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      new: false,
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        console.log(this);
        console.log(this.$route);
      }
    }
  }
}
</script>
