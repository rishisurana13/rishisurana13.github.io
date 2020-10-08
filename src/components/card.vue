<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <hr />
    <img class="card-img" :src="img" alt="Image unavailable." />
    <hr />
    <button class="see-more">
      <a class="link" :href="gitUrl" target="_blank">See More</a>
    </button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Card",
  props: ["title", "gitUrl", "img"]
};
</script>

<style type="text/css" scoped>
h1 {
  font-weight: normal;
}
.card {
  border-style: solid;
  border-width: 2px;
  height: 20em;
  width: 25em;
  border-radius: 20px;
  margin: 2%;
  padding: 10px;
  color: #bb9139;
  background-color: #202020;
}
.card-img {
  width: 100%;
  height: 60%;
  border-radius: 5px;
  margin: 1%;
  margin-left: -0.5%;
}
.description {
  text-align: left;
  padding: 5px;
  height: 5em;
}
hr {
  /*border: 1px solid #BB9139;*/
  display: none;
}
.link {
  color: #bb9139;
  text-decoration: none;
  font-size: 1.5em;
}
.see-more {
  margin-top: 1em;
}
button {
  background-color: transparent;
  color: #bb9139;
  border: 1px solid #bb9139;
  border-radius: 10px;
  width: 10em;
  height: 3em;
}
button:hover {
  background-color: #bb9139;
  color: #202020;
}
button:hover .link {
  color: #202020;
}
.link:hover {
  font-weight: bold;
}

@media only screen and (max-width: 450px) {
  .card {
    height: 17em;
    width: 20em;
  }
}
</style>
