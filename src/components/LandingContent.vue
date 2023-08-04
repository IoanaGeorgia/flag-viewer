<script>
 import json from '..\\assets\\data.json'
import DataCountry from './DataCountry.vue'
import HeaderComponent from './HeaderComponent.vue'
export default {
    name: 'LandingContent',
    data() {
        return {
            countryInput: '',
            region: '',
            countries: json,
        };
    },
    mounted() {
        console.log(this.countries, 'cc');
    },
    methods: {
        toggleTheme() {
            return;
        },
        getRegion(regionInput) {
            this.region = regionInput;
            console.log(this.region);
        }
    },
    components: { DataCountry }
};
</script>

<template>
  <div class="landingWrapper">
    <div class="filtersWrapper">
    <div class="inputWrapper">
      <div class="inputIcon">
         <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
      </div>
      <input v-model='countryInput' class="inputElem" placeholder="Search for a country...">
    </div>


    <div class="dropdown">
  <button class="dropbutton">Filter by Region <span class='dropdownIcon'>⌄</span></button>
  <div class="dropdown-content">
  <button @click="getRegion('Africa')">Africa</button>
   <button @click="getRegion('America')">America</button>
   <button @click="getRegion('Asia')">Asia</button>
   <button @click="getRegion('Europe')">Europe</button>
   <button @click="getRegion('Oceania')">Oceania</button>
  </div>
</div>

    </div>

    <div class="dataWrapper">
      <DataCountry v-for="i in countries" :countryName="i.name" :flagIcon="i.flags.png" :population="i.population" :capital="i.capital" :region="i.region" /> 
    </div>
  </div>
</template>

