<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 3rem;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.title {
  color: #42b983;
}
h3, h2, h1 {
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.lemur {
  max-width: 20%;
}

.morse {
  font-size: 400%;
  color: #42b983;
}

</style>
