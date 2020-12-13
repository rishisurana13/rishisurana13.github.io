<template>
  <div class="home">
    <div class="p1">
      <transition name="fade"><span v-show="hello">Hello,</span></transition>
      <div v-show="init">
        I'm
        <transition name="fade">
          <span v-show="show" class="bold"
            >{{ active }}<span class="nb">{{ extra }}</span>
          </span>
        </transition>
      </div>
    </div>

    <!-- <hr> -->
    <br />
    <div id="proj-container">
      <div id="proj-title" class="">Projects</div>
      <p>To view more projects visit the "Software" section.</p>
      <br />
      <div class="cards" v-for="card in cards" :key="card.title">
        <Card
          class="card"
          :gitUrl="card.url"
          :title="card.title"
          :img="card.img"
        />
      </div>
    </div>
    <!-- <hr> -->

    <div id="skills" class="">Technical Skills</div>
    <p><span class="bold hl">*Highlighted</span> = Most Experience</p>

    <div class="programming">
      <div class=" skill-grp">
        <div class="skill">
          <div class="list-title">UI Development</div>
          <hr class="hr" />
          <br />
          <div class="skill-list">
            <ul>
              <li class="hl">UI State Management</li>
              <li>Responsive + Fluid UI Development</li>
              <li class="hl">Single Page Web Application Development</li>
            </ul>
          </div>
        </div>

        <div class="skill">
          <div class="list-title">API Development</div>
          <hr class="hr" />
          <br />
          <p class="bold hover-msg">(Hover to see more)</p>
          <div class="skill-list">
            <ul>
              <li class="hl">RESTful API Development</li>
              <li>Database Management</li>
              <li>Schema Design</li>
              <li class="hl">Ecommerce Solutions</li>
            </ul>
          </div>
        </div>

        <div class="skill">
          <div class="list-title">Deep Learning</div>
          <hr class="hr" />
          <br />
          <div class="skill-list">
            <ul>
              <li class="hl">Image Classification</li>
              <li class="hl">Object Detection</li>
              <li>Image Segmentation</li>
              <li>IoT Implementation</li>
            </ul>
          </div>
        </div>

        <div class="skill">
          <div class="list-title">Generic</div>
          <hr class="hr" />
          <br />
          <div class="skill-list">
            <ul>
              <li class="hl">Scripting (Automation)</li>
              <li>Web Scraping</li>
              <li class="hl">Data Structures</li>
              <li class="hl">Algorithms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/card.vue";
export default {
  name: "Home",
  components: {
    Card
  },
  data() {
    return {
      active: "",
      idx: -1,
      words: [
        "Rishi.",
        "a Software Engineer.",
        "a Digital Artist.",
        " a Deep Learning enthusiast."
      ],
      extra: "",
      show: true,
      hello: false,
      init: false,
      cards: [
        // {
        //   title: 'Ecommerce API',
        //   url: 'https://github.com/rishisurana13/ai-security-system#instructions',
        //   img:'https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/12/AdobeStock_113126068-Converted.jpg'
        // },
        {
          title: "Simple School",
          url: "https://www.simple-school.com",
          img:
            "https://i.ibb.co/wcKFF6f/Screen-Shot-2020-10-02-at-9-34-14-AM.png"
        },
        {
          title: "AI Security System",
          url:
            "https://github.com/rishisurana13/ai-security-system#instructions",
          img:
            "https://www.securitysales.com/wp-content/uploads/2019/11/AdobeStock_145218141.jpg"
        },
        {
          title: "Surana Jewels",
          url: "https://www.simple-school.com",
          img:
            "https://i.ibb.co/yY2LPr8/Screen-Shot-2020-10-02-at-10-03-47-AM.png"
        }
      ]
    };
  },
  methods: {
    changeAdj() {
      setTimeout(() => {
        this.show = false;
      }, 2000);
      this.idx += 1;
      if (this.idx === this.words.length) {
        this.idx = 0;
      }

      this.active = this.words[this.idx];
      if (this.idx === 0) {
        setTimeout(() => {
          this.extra = " Nice to meet you.";
        }, 1000);
      } else {
        this.extra = "";
      }
      this.show = true;
    }
  },
  mounted() {
    this.hello = true;
    setTimeout(() => {
      this.init = true;
      this.show = true;
      this.changeAdj();
      setInterval(this.changeAdj, 3550);
    }, 2000);
  }
};
</script>

<style type="text/css" scoped>
.hr {
  visibility: hidden;
}
hr {
  border: 1px solid #bb9139;
}
.home {
  color: #bb9139;
}
.p1 {
  text-align: left;
  margin-left: 5%;
  margin-top: 1.5em;
  font-size: 5em;
  height: 5.8em;
}
.bold {
  font-weight: bold;
}
.nb {
  font-weight: normal;
}

.programming {
  /*text-align: left;*/
  padding: 30px;
  margin-left: 6%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.cards {
  display: inline-flex;
  flex-wrap: wrap;
  /*width: 95%;*/
}
.card {
  margin: 5%;
}
#skills {
  font-size: 3em;
  /*font-weight: bold;*/
  margin-top: 5%;
}
.skill-grp {
  display: inline-flex;
  flex-wrap: wrap;
  width: 95%;
  /*margin-left: 10%;*/
}
.skill {
  width: 20em;
  border-style: solid;
  border-width: 2px;
  padding: 10px;
  text-align: left;
  border-radius: 20px;
  margin: 2%;
  background-color: #bb9139;
  color: #202020;
  height: 17em;
}
.skill-list {
  opacity: 0;
}
.skill:hover .skill-list, .skill:active .skill-list {
  opacity: 1;
}
.skill:hover, .skill:active{
  color: #bb9139;
  background-color: #202020;
}

.list-title {
  font-size: 2em;
  text-align: center;
  padding: 5px;
  margin-top: 3em;
  font-weight: bold;
}
.skill:hover .list-title, .skill:active .list-title {
  margin-top: 0em;
  font-weight: bold;
}

.skill:hover .hr, .skill:active .hr {
  visibility: visible;
  border: 1px solid #bb9139;
}
.skill:hover .hover-msg {
  display: none;
}

.t-title {
  font-size: 1.5em;
  /*font-weight: bold;*/
}
ul {
  font-size: 1.5em;
}

#proj-title {
  font-size: 3em;
}

.d-learning {
  margin-left: 4%;
}
.in-ul {
  font-size: 1em;
}
.hl {
  color: #c9c9c9;
}
.hover-msg {
  text-align: center;
}


@media only screen and (max-width: 902px) {
  .skill-grp {
    margin-left: 20%;
  }

@media only screen and (max-width: 769px) {
  .p1 {
    font-size: 250%;
  }
  .cards {
    margin-left: 20%;
  }
  .skill-grp {
    margin-left: 15%;
  }
  .skill {
    /*width: 15em;*/
    /*font-size: 12px;*/
    padding: 10px 10px 10px 0px;
  }
  .list-title {
    font-size: 1.5em;
  }
  li {
    width: 80%;
  }
}

@media only screen and (max-width: 501px) {
  .p1 {
    font-size: 200%;
    width: 12em;
  }
  .cards {
    margin-left: 0%;
  }
  .skill-grp {
    margin-left: 5%;
  }
  .list-title {
    margin-top: 5em;
  }
  .skill {

    height: 19em;
  }
}
@media only screen and (max-width: 450px) {
  .skill {
    height: 18em;
    width: 20em;
    margin-left: 0%;
  }
}
}

</style>
