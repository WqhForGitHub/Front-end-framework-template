<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <p>{{ $t("example1") }}</p>
      <p>{{ $t("example2") }}</p>
    </nav>
    <button @click="throwError">Throw error</button>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    throwError() {
      throw new Error('Sentry Error')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
