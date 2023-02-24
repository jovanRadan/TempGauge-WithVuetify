<template>
  <header>

    <v-row align="center" justify="center">
      <navbar>
        <h1 :class="TitleSize">{{ mode }} Mode</h1>
        <h1 :class="TitleSize"> (Press T to switch)</h1>
        <Toggle :mode="mode" @toggle="$emit('toggle')"/>
      </navbar>
    </v-row>

    <div class="container">
      <v-card :class="whichScreen">
        <div class="outerCircle">
          <v-card-title class="dot">GDi</v-card-title>
          <div id="pulsingCircleContainer">
            <div :class="pulsingCircle" style="animation-delay: 0.5s"></div>
            <div :class="pulsingCircle" style="animation-delay: 1.5s"></div>
            <div :class="pulsingCircle" style="animation-delay: 2.5s"></div>
            <div :class="pulsingCircle" style="animation-delay: 3.5s"></div>
          </div>
          <v-card-title :class="sizeOfTitle">Server Room Temperature Log</v-card-title>
        </div>
      </v-card>
    </div>
  </header>
</template>

<script>
import Toggle from '@/components/switch/Toggle'

export default {
  props: ['mode'],
  components: {
    Toggle
  },
  computed: {
    whichScreen() {
      switch (this.$vuetify.breakpoint.name) {

        case 'xs':
          return 'responsiveMobile'
        case 'sm':
          return 'responsiveTablet'
        case 'md':
          return 'responsiveMedium'
        case 'lg':
          return 'responsiveDesktop'
        case 'xl':
          return 'responsiveUltraWide'
      }
    },
    sizeOfTitle() {
      switch (this.$vuetify.breakpoint.name) {

        case 'xs':
          return 'headingMobile'
        case 'sm':
          return 'headingTablet'
        case 'md':
          return 'headingMedium'
        case 'lg':
          return 'headingDesktop'
        case 'xl':
          return 'headingUltraWide'
      }
    },
    pulsingCircle() {
      switch (this.$vuetify.breakpoint.name) {

        case 'xs':
          return 'pulsingMobile'
        case 'sm':
          return 'pulsingTablet'
        case 'md':
          return 'pulsingMedium'
        case 'lg':
          return 'pulsingDesktop'
        case 'xl':
          return 'pulsingUltraWide'
      }
    },
    TitleSize() {
      switch (this.$vuetify.breakpoint.name) {

        case 'xs':
          return 'navTitleMobile'
        case 'sm':
          return 'navTitleTablet'
        case 'md':
          return 'navTitleMedium'
        case 'lg':
          return 'navTitleDesktop'
        case 'xl':
          return 'navTitleUltraWide'
      }
    }
  }
}
</script>

<style scoped>

* {
  margin: auto;
  justify-items: center;
  justify-content: center;
  place-content: center;
}

/*==========================================================================================*/

navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: #adacac;
  transition: background 1.75s ease-in-out;
  width: 100%;
  z-index: 1000000;
  position: absolute;
}

.dark navbar {
  background: #364049;
}

.navTitleMobile {
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 900;
}

.navTitleTablet {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 900;
}

.navTitleMedium {
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 900;
}

.navTitleDesktop {
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 900;
}

.navTitleUltraWide {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 900;
}

/*==========================================================================================n*/

.container {
  height: 110vh;
}

@keyframes scaleIn {
  from {
    transform: scale(.5, .5);
    opacity: .5;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
}

/*=========================================================================================================================*/

.responsiveMobile {
  top: 20%;
  height: 300px;
  width: 300px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 150px;
  padding-top: 40px;
  z-index: 1;
}

.headingMobile {
  margin-top: 2.5em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: -4.5em;
  letter-spacing: 6px;
  color: #427f93;
  text-align: center;
  justify-content: center;
  font-size: 28px;
  text-decoration-line: underline
}

/*.dark headingMobile {*/
/*  color: white;*/
/*}*/

.headingMobile:hover {
  letter-spacing: 10px;
  font-size: 32px;
  transition: 800ms ease;
}

.dark.headingMobile {
  color: white;
}

.pulsingMobile {
  top: 0.1%;
  border-radius: 50%;
  background-color: deepskyblue;
  width: 300px; /* here to change size of pulsing  */
  height: 300px; /* here to change size of pulsing  */
  position: absolute;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32);
  z-index: -10;
}

/*=========================================================================================================================*/

.responsiveTablet {
  top: 15%;
  height: 500px;
  width: 500px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 275px;
  padding-top: 65px;
  z-index: 1;

}


.headingTablet {
  margin-top: 2em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: -4.5em;
  letter-spacing: 6px;
  color: #427f93;
  text-align: center;
  justify-content: center;
  font-size: 60px;
  text-decoration-line: underline
}

/*.dark headingTablet {*/
/*  color: white;*/
/*}*/

.headingTablet:hover {
  letter-spacing: 10px;
  font-size: 70px;
  transition: 800ms ease;
}

.pulsingTablet {
  top: 0.1%;
  border-radius: 50%;
  background-color: deepskyblue;
  width: 500px; /* here to change size of pulsing  */
  height: 500px; /* here to change size of pulsing  */
  position: absolute;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32);
  z-index: -10;
}

/*=========================================================================================================================*/

.responsiveMedium {
  top: 15%;
  height: 525px;
  width: 525px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 275px;
  padding-top: 80px;
  z-index: 1;
}


.headingMedium {
  margin-top: 1.5em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: -4.5em;
  letter-spacing: 6px;
  color: #427f93;
  text-align: center;
  justify-content: center;
  font-size: 65px;
  text-decoration-line: underline
}

/*.dark headingMedium {*/
/*  color: white;*/
/*}*/

.headingMedium:hover {
  letter-spacing: 10px;
  font-size: 80px;
  transition: 800ms ease;
}

.pulsingMedium {
  top: 0.1%;
  border-radius: 50%;
  background-color: deepskyblue;
  width: 525px; /* here to change size of pulsing  */
  height: 525px; /* here to change size of pulsing  */
  position: absolute;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32);
  z-index: -10;
}

/*=========================================================================================================================*/

.responsiveDesktop {
  top: 10%;
  height: 600px;
  width: 600px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 325px;
  padding-top: 90px;
  z-index: 1;
}

.headingDesktop {
  margin-top: 2.25em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  letter-spacing: 6px;
  color: #427f93;
  text-align: center;
  justify-content: center;
  font-size: 70px;
  text-decoration-line: underline
}

/*.dark headingDesktop {*/
/*  color: white;*/
/*}*/

.headingDesktop:hover {
  letter-spacing: 10px;
  font-size: 80px;
  transition: 800ms ease;
}

.pulsingDesktop {
  top: 0.1%;
  border-radius: 50%;
  background-color: deepskyblue;
  width: 600px; /* here to change size of pulsing  */
  height: 600px; /* here to change size of pulsing  */
  position: absolute;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32);
  z-index: -10;
}

/*=========================================================================================================================*/

.responsiveUltraWide {
  top: 10.5%;
  height: 850px;
  width: 850px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 450px;
  padding-top: 125px;
  z-index: 1;
}

.headingUltraWide {
  margin-top: 2.25em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  letter-spacing: 6px;
  color: #427f93;
  text-align: center;
  justify-content: center;
  font-size: 100px;
  text-decoration-line: underline;
}

.headingUltraWide:hover {
  letter-spacing: 10px;
  font-size: 115px;
  transition: 800ms ease;
}

.pulsingUltraWide {
  top: 1%;
  border-radius: 50%;
  background-color: deepskyblue;
  width: 850px; /* here to change size of pulsing  */
  height: 850px; /* here to change size of pulsing  */
  position: absolute;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32);
  z-index: -10;
}

/*=========================================================================================================================*/

/*

COULDN'T FIND OUT HOW TO MAKE THE WRITING IN THE PAGE CHANGE COLOUR
Can only make it change in the NAVBAR!

 */

/*.dark.headingMobile {*/
/*  margin-top: 2em;*/
/*  text-transform: uppercase;*/
/*  font-family: 'Gambetta', serif;*/
/*  transition: 1000ms ease-out;*/
/*  margin-bottom: -4.5em;*/
/*  letter-spacing: 6px;*/
/*  color: black;*/
/*  text-align: center;*/
/*  justify-content: center;*/
/*  font-size: 30px;*/
/*  text-decoration-line: underline*/
/*}*/

/*.dark.headingTablet {*/
/*  color: white;*/
/*}*/

/*.dark.headingMedium {*/
/*  color: white;*/
/*}*/

/*.dark.headingDesktop {*/
/*  color: white;*/
/*}*/

/*.dark.headingUltraWide {*/
/*  color: white;*/
/*}*/


</style>
