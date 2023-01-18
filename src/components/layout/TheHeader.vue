<template>
  <header>

    <v-card :class="whichScreen">
      <div class="container">
        <v-card-title class="dot">GDi</v-card-title>
        <v-card-title :class="sizeOfTitle">Server Room Temperature Log</v-card-title>
        <!--        <v-card-title class="p">&#45;&#45;Scroll Down&#45;&#45;</v-card-title>-->
      </div>
    </v-card>

  </header>
</template>

<script>
// import Heading from "@/components/Heading";

export default {
  // components: {Heading},
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
    }
  }
}
</script>

<style scoped>

/*==========================================================================================*/

.container {
  height: 110vh;
  /*background-color: black;*/
}

.responsiveMobile {
  margin-top: 1.5em;
  margin-bottom: 3.5em;
  margin-left: 1.10em;
  height: 250px;
  width: 250px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 100px;
  display: flex;
  align-items: center;
  justify-content: center;


  /*text-transform: initial;*/
  /*-webkit-box-align: center;*/
  /*-ms-flex-align: center;*/
  /*align-items: center;*/
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  /*display: flex;*/
  /*-ms-flex-wrap: wrap;*/
  /*flex-wrap: wrap;*/
}

.headingMobile {
  margin-top: 2em;
  margin-left: -2.25em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: -4.5em;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  font-size: 30px;
}

.headingMobile:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveTablet {
  margin: 1em auto 0;
  height: 450px;
  width: 450px;
  background-color: #00adee;
  border-radius: 50%;
  font-size: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  text-transform: initial;
}


.headingTablet {
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: 4.5em;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  font-size: 45px;
}

.headingTablet:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveMedium {

  margin: 0.25em auto auto;
  height: 300px;
  width: 300px;
  background-color: #00adee;
  border-radius: 50%;
  font-size: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  text-transform: initial;
}


.headingMedium {
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: 4.5em;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  font-size: 45px;
}

.headingMedium:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveDesktop {
  /*margin-top: 1.5em;*/
  margin-bottom: 3.5em;
  height: 350px;
  width: 350px;
  background-color: #00adee;
  border-radius: 50%;
  padding-top: 30px;
  font-size: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  text-transform: initial;
}

.headingDesktop {
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  margin-bottom: 4.5em;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  font-size: 70px;
}

.headingDesktop:hover {
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
