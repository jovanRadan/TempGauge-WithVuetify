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
    }
  }
}
</script>

<style scoped>

/*==========================================================================================*/

.container {
  /*height: 110vh;     FIX THIS (IM PRETTY SURE CONTAINER NEEDS TO BE OUTSIDE THE VUETIFY TAG <v-card class=" "> */
  justify-items: center;
  justify-content: center;
  /*background-color: black;*/
}

.responsiveMobile {
  margin-top: 1.5em;
  margin-bottom: 5.5em;
  margin-left: 1.05em;
  height: 250px;
  width: 250px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 100px;
  padding-top: 0.2em;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
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
}

.headingMobile:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveTablet {
  margin-top: 0.75em;
  margin-bottom: 3em;
  height: 450px;
  width: 450px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 200px;
  padding-top: 0.2em;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
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
  font-size: 70px;
}

.headingTablet:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveMedium {
  margin-top: 0.5em;
  margin-bottom: 4em;
  height: 400px;
  width: 400px;
  background-color: #00adee;
  border-radius: 50%;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  font-size: 165px;
  padding-top: 0.2em;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
}


.headingMedium {
  margin-top: 1.75em;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  justify-content: center;
  font-size: 70px;
}

.headingMedium:hover {
  letter-spacing: 10px;
  transition: 800ms ease;
}


.responsiveDesktop {
  margin-top: 0.5em;
  margin-bottom: 3.5em;
  height: 350px;
  width: 350px;
  background-color: #00adee;
  border-radius: 50%;
  padding-top: 10px;
  font-size: 150px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: white;
  font-family: "trebuchet MS", sans-serif;
  text-transform: initial;
}

.headingDesktop {
  margin-top: 1.75em;
  padding-left: 35px;
  text-transform: uppercase;
  font-family: 'Gambetta', serif;
  transition: 1000ms ease-out;
  letter-spacing: 6px;
  color: white;
  text-align: center;
  justify-content: center;
  /*text-justify-trim: center;*/
  font-size: 50px;
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
