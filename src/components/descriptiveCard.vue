<template>
  <div class="descriptive-card">
    <h1 class="title">{{ title }}</h1>
    <img class="card-img" :src="img" />
    <p class="description">{{ description }}</p>
    <button class="see-more">
      <a :href="gitUrl" target="_blank">See More</a>
    </button>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "DescriptiveCard",
  props: ["title", "gitUrl", "description", "img"]
};
</script>

<style scoped="">
.descriptive-card {
  border-style: solid;
  border-width: 2px;
  height: 35em;
  width: 40em;
  border-radius: 20px;
  margin: 5%;
  padding: 10px;
  color: #202020;
  background-color: #bb9139;
  text-align: left;
}
.card-img {
  width: 550px;
  height: 325px;
  border-radius: 5px;
  margin: 1%;
  margin-left: 2%;
  filter: blur(0px);
}
.descriptive-card:hover {
  color: #bb9139;

  background-color: #202020;
}
.description {
  height: 5em;
  padding: 5px;
}
.title {
  text-align: center;
  padding: 0px;
  margin: 1%;
  font-weight: normal;
}

.descriptive-card:hover .see-more {
  color: #bb9139;
  /*background-color: #202020;*/
  border: 1px solid #bb9139;
}
.descriptive-card:hover a {
  color: #bb9139;
}
.see-more {
  background-color: transparent;
  border: 1px solid #202020;
  border-radius: 10px;
  width: 10em;
  height: 3em;
  margin-top: 2em;
  margin-left: 16em;
}

.see-more:hover {
  background-color: #bb9139;
  color: #bb9139;
}
.see-more:hover a {
  color: #202020;
}
a {
  color: #202020;
  text-decoration: none;
}
a:hover {
  font-weight: bold;
}

@media only screen and (max-width: 660px) {
  .descriptive-card {
  height: 100%;
  width: 20em;
}
.card-img {
  width: 275px;
  height: 162.5px;
}
.see-more {
  width: 10em;
  height: 3em;
  margin-top:10em;
  margin-left: 6em;
}
}
</style>
