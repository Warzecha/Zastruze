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
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
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

.lemur {
  max-width: 20%;
}

.morse {
  font-size: 400%;
  color: #42b983;
  display: block;
}

.green {
  color:#42b983;
}


.inline {
  display: inline;
}

.answer {
  border: 1px solid rgba(221, 221, 221, 0.897);
    border-radius: 4px;
    padding: 5px;
}

.answer:hover {
    box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

img {
  border: 1px solid rgba(221, 221, 221, 0.897);
    border-radius: 4px;
    padding: 5px;
}

.reversed {
  -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  font-style: italic;

}

.reversed:hover {
  -webkit-transform: scaleX(1);
    transform: scaleX(1);
  font-style: italic;
}

.we {
  border-radius: 50%;
  max-width: 60%;
  display: inline;
}

li {
  font-size: 120%
}

button {
  background-color: rgba(233, 75, 75, 0.767);
  border-radius: 14px;
  padding: 14px 40px;
  color: whitesmoke;
  font-size: 150%;
}

button:hover {
  background-color: white;
  color:tomato;
}

</style>
