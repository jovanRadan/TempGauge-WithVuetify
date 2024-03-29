<template>
  <div class="Application" :class="mode">
    <meta name="viewport" content="device-width=width, initial-scale=1"/>
    <the-header :mode="mode" @toggle="toggle"></the-header>

    <p justify="center"> Status: {{ status }}</p>

    <div :class="containerApplication">
      <div :class="colourfulGauge">
        <colourful-gauge
            :value="currentValue"
            :min="0"
            :max="50"
            label-text="°C"
            :width="380"
            :height="350"
        />
      </div>
      <div :class="logLayout">
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;1,100&family=Varela+Round&display=swap"
            rel="stylesheet">
        <ul v-for="index in Math.min(8, messages.length)" :key="index">
          {{ topic }} = {{ messages[index - 1].payload }} °C at
          {{ formatDate(new Date()) + "  " + messages[index - 1].date }}
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ColourfulGauge from "@/components/Gauge2/ColourfulGauge";
import TheHeader from "@/components/layout/TheHeader";
import * as Paho from 'paho-mqtt';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Application",
  components: {
    TheHeader,
    ColourfulGauge,
  },
  data() {
    return {
      exampleValue: 0,
      mode: 'light',
      host: 'serbia.gdi.net ',
      port: 80,
      path: ' /wss/mqtt/',
      useTLS: true,
      cleansession: true,
      username: null,
      password: null,
      topic: 'temperature',
      status: 'connecting',
      messages: [],
      currentValue: 0, // another name for payload (check line 145)
    };
  },
  mounted() {
    this.MQTTconnect();
  },
  beforeDestroy() {
    this.mqtt.disconnect();
  },
  created() {
    window.addEventListener('keyup', this.keyPress)
  },
  methods: {
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
    },
    MQTTconnect() {
      this.mqtt = new Paho.Client(
          'serbia.gdi.net',   // host
          443,                 // port
          '/ws/mqtt/',        // path
          'web_' + parseInt(Math.random() * 100, 10)
      );
      const options = {
        timeout: 3,
        useSSL: this.useTLS,
        cleanSession: this.cleansession,
        onSuccess: this.onConnect,
        onFailure: message => {
          this.status = `Connection failed: ${message.errorMessage}. Retrying`;
          setTimeout(this.MQTTconnect, 5000);
        }
      };

      this.mqtt.onConnectionLost = this.onConnectionLost;
      this.mqtt.onMessageArrived = this.onMessageArrived;

      if (this.username != null) {
        options.userName = this.username;
        options.password = this.password;
      }

      this.mqtt.connect(options);
    },
    onConnect() {
      this.status = `Connected to ${this.host}:${this.port}${this.path}`;
      // Connection succeeded; subscribe to our topic
      this.mqtt.subscribe(this.topic, {qos: 0});
    },
    onConnectionLost(response) {
      this.status = `Connection lost: ${response.errorMessage}. Reconnecting`;
      setTimeout(this.MQTTconnect, 5000);
    },
    onMessageArrived(message) {
      const topic = message.destinationName;
      const payload = message.payloadString;

      this.currentValue = payload

      const date = new Date();

      const hour = date.getHours().toString().length === 1 ? '0' + date.getHours().toString() : date.getHours().toString();
      const minute = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes().toString() : date.getMinutes().toString();
      const second = date.getSeconds().toString().length === 1 ? '0' + date.getSeconds().toString() : date.getSeconds().toString();


      this.messages.unshift({
        topic, payload, date: `${hour}:${minute}:${second}`
      });
    },
    formatDate(date) {
      const options = {day: 'numeric', month: 'numeric', year: 'numeric'};
      return date.toLocaleDateString('en-GB', options);
    },
  },
  computed: {
    containerApplication() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'containerApplicationMobile'
        case 'sm':
          return 'containerApplicationTablet'
        case 'md':
          return 'containerApplicationMedium'
        case 'lg':
          return 'containerApplicationDesktop'
        case 'xl':
          return 'containerApplicationUltraWide'
      }
      return null;
    },
    colourfulGauge() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'positionOfGaugeMobile'
        case 'sm':
          return 'positionOfGaugeTablet'
        case 'md':
          return 'positionOfGaugeMedium'
        case 'lg':
          return 'positionOfGaugeDesktop'
        case 'xl':
          return 'positionOfGaugeUltraWide'
      }
      return null;
    },
    logLayout() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'sizeOfLogMobile'
        case 'sm':
          return 'sizeOfLogTablet'
        case 'md':
          return 'sizeOfLogMedium'
        case 'lg':
          return 'sizeOfLogDesktop'
        case 'xl':
          return 'sizeOfLogUltraWide'
      }
      return null;
    }
  }
};
</script>

<style>
body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
  font-weight: 900;
  transition: background 0.3s ease-in-out;
}

/*==========================================================================================n*/

.containerApplicationMedium {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.containerApplicationDesktop {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.containerApplicationUltraWide {
  display: flex;
  flex-direction: row;
  align-items: center;
}

/*==========================================================================================n*/
.positionOfGaugeMobile {
  width: 100%;
  display: flex;
  justify-content: center;
}

.positionOfGaugeTablet {
  display: flex;
  width: 100%;
  justify-content: center;
}

.positionOfGaugeMedium {
  display: flex;
  width: 50%;
  justify-content: center;
}

.positionOfGaugeDesktop {
  display: flex;
  width: 50%;
  justify-content: center;
}

.positionOfGaugeUltraWide {
  display: flex;
  width: 50%;
  justify-content: center;
}

/*==========================================================================================n*/
.sizeOfLogMobile {
  padding-bottom: 1.5em;
  text-align: center;
}

.sizeOfLogTablet {
  padding: 1em;
  font-size: 2em;
  text-align: center;
  width: 100%;
}

.sizeOfLogMedium {
  width: 50%;
  font-size: 20px;
  padding: 0.5em;
  padding-right: 1em;
  text-align: center;

}

.sizeOfLogDesktop {
  width: 50%;
  font-size: 25px;
  padding: 0.2em;
  padding-right: 1em;
  text-align: center;
}

.sizeOfLogUltraWide {
  width: 50%;
  font-size: 37.5px;
  padding: 0.5em;
  text-align: center;
}

#app .desc {
  font-style: italic;
  color: #aaa;
  font-size: 15px;
  margin: 5px 0 123px;
  font-family: sans-serif;
}

.Application {
  background: #FFFFFF;
  color: #192734;
  transition: background 1.75s ease-in-out;
  width: 100vw;
}

p {
  font-size: 30px;
  font-family: 'Varela Round', sans-serif;
  transition: 1000ms ease-out;
  text-align: center;
}

ul {
  font-family: 'Varela Round', sans-serif;
  transition: 1000ms ease-out;
  padding: 0;
}

.dark {
  background: #192734;
  color: #E8E8E8;
}

</style>
