<template>
  <div id="app">
    <div id="nav">
      <div class="title">Rishi Surana</div>
      <div class="nav-items">
        <router-link class="nav-item rl" to="/">Home</router-link>
        <a
          class="nav-item rl"
          href="https://drive.google.com/file/d/1x4f2XgYMR9cn56yhXsxrWwSIQxtjUThL/view?usp=sharing"
          target="_blank"
          >Resume</a
        >
        <router-link class="nav-item rl" to="/projects">Software</router-link>
        <router-link class="nav-item rl" to="/digital-art"
          >Digital Art</router-link
        >
        <router-link class="nav-item rl" to="/contact">Contact</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #202020;
  width: 100%;
}

#nav {
  padding: 30px;
  display: inline-flex;
  width: 95.5%;
  /*position: sticky;*/
  z-index: 100;
  top: 0;
  background-color: #202020;
  color: #bb9139;
}
.nav-item {
  margin-left: 1em;
  position: sticky;
  text-decoration: none;
}
.nav-item:hover {
  text-decoration: underline;
}
.nav-items {
  margin-left: 27.5%;
}
.title {
  font-size: 2em;
  margin-top: -0.5em;
}
#nav a {
  /*font-weight: bold;*/
  color: #bb9139;
}

#nav a.router-link-exact-active {
  font-weight: bold;
}
.rl {
  margin-top: 0.375em;
}
</style>
