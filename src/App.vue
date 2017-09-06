<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "./scss/base";
body {
  min-width: 1024px;
  overflow: auto !important;
}
</style>
