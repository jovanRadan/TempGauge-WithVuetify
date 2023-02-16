<template>
  <div class="Application" :class="mode">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <the-header :mode="mode" @toggle="toggle"></the-header>
    <!--    <the-header :mode="mode"></the-header>-->

    <aside>
      <button type="button" :class="buttonSizes" @click="minToMax">0 - 50 Toggle</button>

      <button type="button" :class="buttonSizes" @click="random">Random Number</button>
    </aside>
    <!--  THE OTHER GAUGE IF WE WANT TO USE THE OTHER DESIGN  -->
    <!--      <div class="Gauge">-->
    <!--        <gauge-->
    <!--            fontSize="1em"-->
    <!--            :min="0"-->
    <!--            :max="50"-->
    <!--            :dp="1"-->
    <!--            :value="exampleValue"-->
    <!--            unit="°C"-->
    <!--            style="width: 500px"-->
    <!--            inactiveFill="#212121"-->
    <!--            :minThreshold="23"-->
    <!--            :maxThreshold="25"-->
    <!--            minThresholdFill="lawngreen"-->
    <!--            maxThresholdFill="darkred"-->
    <!--            title-style="fill: #999999; font-size: 12px; font-weight: 600;  transform: translateY(-5px)"-->
    <!--        />-->

    <v-row align="center" justify="center">
      <colourful-gauge
          :value="exampleValue"
          :min="0"
          :max="50"
          label-text="°C"
          :width="380"
          :height="350"
      />
    </v-row>
  </div>
</template>

<script>
import Gauge from "./components/Gauge.vue";
import ColourfulGauge from "@/components/Gauge2/ColourfulGauge";
import TheHeader from "@/components/layout/TheHeader";

export default {
  name: "Application",
  components: {
    TheHeader,
    Gauge,
    ColourfulGauge,
  },
  data() {
    return {
      exampleValue: 0,
      mode: 'light'
    };
  },
  mounted() {
    this.random();
  },
  created() {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
    random() {
      this.exampleValue = Math.random() * Math.floor(50);
    },
    minToMax() {
      this.exampleValue = this.exampleValue === 0 ? 50 : 0;
    },
    easeOutBounce(pos) {
      if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
      } else if (pos < 2 / 2.75) {
        return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
      } else if (pos < 2.5 / 2.75) {
        return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
      } else {
        return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
      }
    },
    keyPress(e) {
      if (e.key === 't') {
        this.toggle()
      }
    },
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light"
      } else {
        this.mode = "dark"
      }
    }
  },
  computed: {
    valInt() {
      return parseInt(this.theVal);
    },
    buttonSizes() {
      switch (this.$vuetify.breakpoint.name) {

        case 'xs':
          return 'buttonMobile'
        case 'sm':
          return 'buttonTablet'
        case 'md':
          return 'buttonMedium'
        case 'lg':
          return 'buttonDesktop'
        case 'xl':
          return 'buttonUltraWide'
      }
    },
  }
};
</script>

<style>
/** {*/
/*  font-family: sans-serif;*/
/*  justify-items: center;*/
/*  justify-content: center;*/
/*  align-items: center;*/
/*}*/

body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
  font-weight: 900;
  transition: background 0.3s ease-in-out;

}

aside {
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
  grid-gap: 1em;
  place-items: center center;
}

h3 {
  color: #333;
}

#app .desc {
  font-style: italic;
  color: #aaa;
  font-size: 15px;
  margin: 5px 0 123px;
  font-family: sans-serif;
}

.buttonMobile {
  border: none;
  border-radius: 5px;
  background-color: #187bcd;
  color: #FFFFFF;
  display: block;
  font-weight: bold;
  font-size: 1.5em;
  height: 2em;
  margin: auto 1em;
  text-align: center;
}

.buttonTablet {
  border: none;
  border-radius: 5px;
  background-color: #187bcd;
  color: #fff;
  display: block;
  font-weight: bold;
  font-size: 2em;
  height: 2em;
  margin: auto 1em;
  text-align: center;
}

.buttonMedium {
  border: none;
  border-radius: 5px;
  background-color: #187bcd;
  color: #fff;
  display: block;
  font-weight: bold;
  font-size: 2em;
  height: 2em;
  margin: auto 1em;
  text-align: center;
}

.buttonDesktop {
  border: none;
  border-radius: 5px;
  background-color: #187bcd;
  color: #fff;
  display: block;
  font-weight: bold;
  font-size: 2em;
  height: 2em;
  margin: auto 1em;
  text-align: center;
}

.buttonUltraWide {
  border: none;
  border-radius: 5px;
  background-color: #187bcd;
  color: #FFFFFF;
  display: block;
  font-weight: bold;
  font-size: 3em;
  height: 2em;
  margin: auto 1em;
  text-align: center;
}

.Application {
  background-color: #F3F3F3;
  color: #192734;
  transition: background 1.75s ease-in-out;
  width: 100vw;
}

.dark {
  background: #192734;
  color: #E8E8E8;
}

</style>
