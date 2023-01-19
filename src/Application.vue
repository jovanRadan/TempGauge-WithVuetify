<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <the-header></the-header>

    <aside>
      <button type="button" @click="minToMax">0 - 50 Toggle</button>

      <button type="button" @click="random">Random Number</button>
    </aside>
    <div :class="ColourfulGaugeSize">

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

        <colourful-gauge
            :value="exampleValue"
            :min="0"
            :max="50"
            label-text="°C"
            :width="380"
            :height="350"

        />


        <!--        </div>-->
      </div>
    </div>
</template>

<script>
import Gauge from "./components/Gauge.vue";
import ColourfulGauge from "@/components/Gauge2/ColourfulGauge";
import TheHeader from "@/components/layout/TheHeader";

export default {
  name: "Apps",
  components: {
    TheHeader,
    Gauge,
    ColourfulGauge,
  },
  data() {
    return {
      exampleValue: 0,
      gauge1: 60,
    };
  },
  mounted() {
    this.random();
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
    }
  },
  computed: {
    valInt() {
      return parseInt(this.theVal);
    },
    ColourfulGaugeSize() {
      switch (this.$vuetify.breakpoint.name) {

        case 'xs':
          return 'colourful-GaugeMobile'
        case 'sm':
          return 'colourful-GaugeTablet'
        case 'md':
          return 'colourful-GaugeMedium'
        case 'lg':
          return 'colourful-GaugeDesktop'
        case 'xl':
          return 'colourful-GaugeUltraWide'
      }
    }
  }
};
</script>

<style>


* {
  font-family: sans-serif;
  justify-items: center;
  justify-content: center;
  align-items: center;
}

body {
  background: #000405;

  /*min-height: 100vh;*/
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Work Sans', sans-serif;
  font-weight: 900;
}

aside {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
  grid-gap: 1em;
  margin-left: 30px;
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

button {
  border: none;
  border-radius: 5px;
  background-color: #187bcd;
  color: #fff;
  display: block;
  font-weight: bold;
  font-size: 1.5em;
  height: 2em;
  margin: auto 1em;
  text-align: center;
}

#app {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
  grid-gap: 5em;
  padding: -0.5em;
  place-items: center center;
}

.colourful-GaugeMobile {
  value: "exampleValue";
  width: 325px;
  height: 350px;
  label-text: "°C";
  title: "Google Gauge";
}

</style>
