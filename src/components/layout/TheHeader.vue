<template>
  <header>

    <div class="container">
      <v-card :class="whichScreen">
        <div class="outerCircle">
            <v-card-title class="dot">GDi</v-card-title>
          <div class="circle" style="animation-delay: 0.5s"></div>
          <div class="circle" style="animation-delay: 1.5s"></div>
          <div class="circle" style="animation-delay: 2.5s"></div>
          <div class="circle" style="animation-delay: 3.5s"></div>
        </div>
        <v-card-title :class="sizeOfTitle">Server Room Temperature Log</v-card-title>
      </v-card>
    </div>

  </header>
</template>

<script>

export default {
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
  }
}
</script>

<style scoped>

/*==========================================================================================*/

* {
  /*display: grid;*/
  margin: auto;
  justify-items: center;
  justify-content: center;
  place-content: center;
}

.container {
  height: 110vh;
}

.circle {
  top:0.1%;
  border-radius: 50%;
  background-color: deepskyblue;
  width: 250px; /* here to change size of pulsing  */
  height:250px; /* here to change size of pulsing  */
  position: absolute;
  opacity: 0;
  animation: scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32);
  z-index: -100;
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

.responsiveMobile {
  top: 20%;
  height: 250px;
  width: 250px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 100px;
  padding-top: 40px;
  visibility: unset;

}

.headingMobile {
  margin-top: 2em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: -4.5em;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  justify-content: center;
  font-size: 30px;
  text-decoration-line: underline
}

.headingMobile:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveTablet {
  top: 15%;
  height: 450px;
  width: 450px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 200px;
  padding-top: 65px;
}


.headingTablet {
  margin-top: 2em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: -4.5em;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  justify-content: center;
  font-size: 60px;
  text-decoration-line: underline
}

.headingTablet:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveMedium {
  top: 10%;
  height: 500px;
  width: 500px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 225px;
  padding-top: 70px;
}


.headingMedium {
  margin-top: 1.75em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: -4.5em;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  justify-content: center;
  font-size: 70px;
  text-decoration-line: underline
}

.headingMedium:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveDesktop {
  top: 5%;
  height: 600px;
  width: 600px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 275px;
  padding-top: 70px;
}

.headingDesktop {
  margin-top: 2em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: -4.5em;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  justify-content: center;
  font-size: 80px;
  text-decoration-line: underline
}

.headingDesktop:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveUltraWide {
  top: 5%;
  height: 650px;
  width: 650px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 300px;
  padding-top: 90px;
}

.headingUltraWide {
  margin-top: 1.25em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: -4.5em;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  justify-content: center;
  font-size: 90px;
  text-decoration-line: underline
}

.headingUltraWide:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


/*==========================================================================================*/

/*.p {*/
/*  font-size: 0.8em;*/
/*  margin-bottom: -10.5em;*/
/*  line-height: 150%;*/
/*  text-align: center;*/
/*  color: white;*/
/*  !*MintCream;*!*/
/*  letter-spacing: 4px;*/
/*  transition: 1000ms ease-out;*/
/*}*/

/*.p:hover {*/
/*  letter-spacing: 6px;*/
/*  transition: 800ms ease;*/
/*} */

</style>
