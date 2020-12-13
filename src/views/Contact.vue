<template>
  <div class="contact">
    <h1>Contact Information</h1>
    <p class="bold">*Hover on the boxes</p>
    <div class="grid-container">
      <div class="columns bold">
        <div class="grid-item">
          <span class="hide-hover">Email</span
          ><span class="hidden"> rishisurana@hotmail.com</span>
        </div>
        <div class="grid-item">
          <span class="hide-hover">Linkedin</span>
          <a
            class="hidden"
            href="https://www.linkedin.com/in/rishi-surana/"
            target="_blank"
          >
            https://www.linkedin.com/in/rishi-surana/</a
          >
        </div>
        <div class="grid-item">
          <span class="hide-hover">Github</span>
          <a
            class="hidden"
            href="https://github.com/rishisurana13"
            target="_blank"
          >
            https://github.com/rishisurana13</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style type="text/css">
h1 {
  font-weight: normal;
}
.hidden {
  color: #202020;
  /*text-align:;*/
  display: none;
}
.contact {
  color: #bb9139;
  min-height: 40em;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  margin: 5%;
  margin-left: 37.5%;
  /*margin-right: 40%;*/
  margin-top: 7.5em;
}
.grid-item {
  border-color: #bb9139;
  border-style: solid;
  border-width: 2px;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  width: 20em;
  margin: 2%;
}

.grid-item:hover, .grid-item:active{
  background-color: #bb9139;
  /*width: 80%;*/
}
.grid-item:hover .hide-hover, .grid-item:active .hide-hover {
  display: none;
}
.grid-item:hover .hidden, .grid-item:active .hidden {
  display: block;
}
.bold {
  font-weight: bold;
}
a {
  color: #bb9139;
}
a:hover {
  color: white;
}
@media only screen and (max-width: 750px) {
  .grid-container {
    margin-left: 17.5%;
  }
  .grid-item {
    /*width: 80%;*/
    font-size: 80%;

  }
@media only screen and (max-width: 400px) {
  .grid-container {
    margin-left: 20%;
  }
}
}
</style>
