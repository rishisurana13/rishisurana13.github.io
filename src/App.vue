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
        <a class="nav-item rl" href="https://www.instagram.com/__rosho/?hl=en" target="_blank"> Art</a>
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
  margin-left: 5%;
  position: sticky;
  text-decoration: none;
}
.nav-item:hover {
  text-decoration: underline;
}
.nav-items {
  margin-left: 27.5%;
  display: inline-flex;
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

@media only screen and (max-width: 750px) {
  .nav-items {
    margin-left: 10%;
    font-size:80%;
  }
  .title {
    font-size: 120%;
    margin-top: 0%;
  }
  #nav {
    width: 90%;
    height: 2em;
  }
  #app {
    width: 100%;
  }

}

@media only screen and (max-width: 500px) {
  #app {
    width: 500px;
    height: 100%;
  }
  #nav {
    width: 80%;
    /*height: 2em;*/
  }
}
</style>
