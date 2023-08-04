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
    <p class="countryTitle">{{ countryName }}</p>
    <p class="countrInfo">Population: 
      <span class='countryInfoSpan'>{{ population }}</span>
    </p>
        <p class="countrInfo">Region: 
      <span class='countryInfoSpan'>{{ region}}</span>
    </p>
        <p class="countrInfo">Capital: 
      <span class='countryInfoSpan'>{{ capital }}</span>
    </p>
  </div>
</template>

