<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
    name: 'CountryExtended',
    props:{
      info:{
        required:false
      }
    },

    mounted(){
        console.log('munted country', this.info)
    },
    methods: {
    },
    components: { HeaderComponent }
};
</script>

<template>

  <div class="landingWrapper"> 
     <button class='goBack' @click="goBack()"> ← Back</button>
  <div class="detailsInnerWrapper">
    <img :src="info.flags.png">
    <div class="detailsInfo">
      <p class="detailsTitle">{{ info.name }}</p>

      <div class="detailsText">
        <div>
            <p class="countryInfo">Native Name: 
      <span class='countryInfoSpan'>{{ info.nativeName }}</span>
    </p> 
      <p class="countryInfo">Population: 
      <span class='countryInfoSpan'>{{ info.population }}</span>
    </p> 
      <p class="countryInfo">Region: 
      <span class='countryInfoSpan'>{{ info.region }}</span>
    </p> 
      <p class="countryInfo">Sub Region: 
      <span class='countryInfoSpan'>{{ info.subregion }}</span>
    </p> 
      <p class="countryInfo">Capital: 
      <span class='countryInfoSpan'>{{ info.capital }}</span>
    </p> 

        </div>


        <div>
            <p class="countryInfo">Top Level Domain: 
      <span class='countryInfoSpan'><span v-for='level in info.topLevelDomain'>{{ level }}</span></span>
    </p> 
      <p class="countryInfo">Currencies: 
      <span class='countryInfoSpan'>{{ info.currencies[0].name}}</span>
    </p> 
      <p class="countryInfo">Languages: 
      <span v-for="language in info.languages" class='countryInfoSpan'>{{ language.name }}</span>
    </p> 
        </div>



      </div>
    </div>
  </div>
  <span class="borderCountries"><span v-for='border in info.borders' class='border'>{{ border }}</span></span>
  </div>

</template>

