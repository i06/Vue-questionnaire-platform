<template>
  <div class="hello">
    <h2>Navigation</h2>
    <ul>
    <router-link to="/login">Login</router-link>
    <router-link to="/platform/questionare">platform-questionare</router-link>
    <router-link to="/platform/new/">new</router-link>
    <router-link to="/platform/new/edit">new-edit</router-link>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
