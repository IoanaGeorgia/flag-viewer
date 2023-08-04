<script>
export default {
    name:'DataCountry',
    props:{
      flagIcon: {
        type: String,
        required: true
      },
      countryName: {
        type: String,
        required: true
      },
      population: {
        type: Number,
        required: true
      },
      region: {
        type: String,
        required: true
      },
      capital: {
        type: String,
        required: true
      },
    },
  data() {
    return {
    }
  },

};
</script>


<template>
  <div class="countryWrapper">
     <img :src="flagIcon" class="countryFlag"> 
     <div class="countryInfoWrapper">
     <p class="countryTitle">{{ countryName }}</p>
    <p class="countryInfo">Population: 
      <span class='countryInfoSpan'>{{ population }}</span>
    </p>
        <p class="countryInfo">Region: 
      <span class='countryInfoSpan'>{{ region}}</span>
    </p>
        <p class="countryInfo">Capital: 
      <span class='countryInfoSpan'>{{ capital }}</span>
    </p> 
    </div>
  </div>
</template>

