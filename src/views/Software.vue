<template>
  <div>
    <h1 class="head">Software Development Projects</h1>
    <div class="desc-cards" v-for="card in cards" :key="card.title">
      <DescriptiveCard
        class="card"
        :gitUrl="card.url"
        :title="card.title"
        :img="card.img"
        :description="card.description"
      />
    </div>
  </div>
</template>

<script type="text/javascript">
import DescriptiveCard from "@/components/descriptiveCard.vue";
export default {
  name: "Home",
  components: {
    DescriptiveCard
  },
  data() {
    return {
      cards: [
        {
          title: "AI Security System",
          url:
            "https://github.com/rishisurana13/ai-security-system#instructions",
          img:
            "https://www.securitysales.com/wp-content/uploads/2019/11/AdobeStock_145218141.jpg",
          description:
            "A security system that runs on IoT devices using Artificial Intelligence to process camera footage to identify threats and notify the system admin of a threat in real time. The program records all footage and uploads it to an AWS S3 bucket every hour. Threats are recorded and uploaded separately."
        },
        {
          title: "Ecommerce API",
          url:
            "https://github.com/rishisurana13/ecom_engine#ecommerce-engine-specialized",
          img:
            "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/12/AdobeStock_113126068-Converted.jpg",
          description:
            "A standard E-commerce API with endpoints for Products, Orders, Authentication, Admin, and Payments. Includes cart and checkout functionality, and Stripe integration for the payment gateway."
        },
        {
          title: "Simple School",
          url: "https://www.simple-school.com",
          img:
            "https://i.ibb.co/wcKFF6f/Screen-Shot-2020-10-02-at-9-34-14-AM.png",
          description:
            "A start up venture co-founded by me and 2 other partners. I am responsible for all technical development for the enterprise. Our first iteration is live, and we are currently building the next iteration using Vue.js, Vuex and the Django REST framework."
        },
        {
          title: "Surana Jewels",
          url: "",
          img:
            "https://i.ibb.co/yY2LPr8/Screen-Shot-2020-10-02-at-10-03-47-AM.png",
          description:
            "Using Vue.js, Vuex and the Django REST framework, I built a Jewelry E-commerce store including custom payment functionality to split payments. The UI is fluid and responsive, making it usable on almost any device with a web browser."
        },
        {
          title: "Goal Tracker App",
          url: "https://github.com/rishisurana13/goal-tracker-client",
          img:
            "https://camo.githubusercontent.com/1294d811bb472a2764a21fe556d0248d0bca1efb/68747470733a2f2f692e696d6775722e636f6d2f564c414c3035352e706e67",
          description:
            "A simple CRUD app to track your goals. Built using the client-server model. Technologies used: Express.js, Node.js, HTML/CSS, jQuery, AJAX."
        },
        {
          title: "Tiki Taki",
          img:
            "https://i.ibb.co/27kz6QN/Screen-Shot-2020-10-04-at-3-03-10-PM.png",
          url: "https://github.com/rishisurana13/rs-tikitaki-client",
          description:
            "Play Tic Tac Toe with your friends with the nostalgic VHS theme. Sign up, Sign in, and play!"
        }
      ]
    };
  }
};
</script>

<style type="text/css" scoped>
.desc-cards {
  display: inline-flex;
  flex-wrap: wrap;
}
.head {
  color: #bb9139;
  margin: 3%;
  font-weight: normal;
}

</style>
