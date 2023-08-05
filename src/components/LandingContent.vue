<script>
import json from "..\\assets\\data.json";
import DataCountry from "./DataCountry.vue";
import CountryExtended from "./CountryExtended.vue";
export default {
  name: "LandingContent",
  data() {
    return {
      countryInput: "",
      region: "",
      countries: [],
      detailsPage: false,
      detailsInfo: {},
    };
  },
  mounted() {
    this.countries = json;
  },
  methods: {
    getRegion(regionInput) {
      this.region = regionInput;
      if (regionInput) {
        this.countries = json.filter((obj) => obj.region.includes(regionInput));
      } else {
        this.countries = json;
      }
    },

    filterByCountry() {
      if (this.countryInput) {
        this.countries = json.filter((obj) =>
          obj.name.toLowerCase().includes(this.countryInput.toLowerCase())
        );
      } else {
        this.countries = json;
      }
    },

    learnMore(country) {
      console.log("learnmore");
      this.$router.push({
        name: "about",
        params: { name: country.name },
      });

      this.detailsPage = true;
      this.detailsInfo = country;
      console.log(this.detailsInfo, 'sss')
    },
  },

  components: { DataCountry, CountryExtended },
};
</script>

<template>
  <!-- <div > -->
  <CountryExtended v-if="detailsPage" :info="detailsInfo" />
  <!-- </div> -->
  <div v-else class="landingWrapper">
    <div class="filtersWrapper">
      <div class="inputWrapper">
        <div class="inputIcon">
          <svg
            class="svg-icon search-icon"
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <title id="title">Search Icon</title>
            <desc id="desc">A magnifying glass icon.</desc>
            <g class="search-path" fill="none" stroke="#848F91">
              <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
        </div>
        <input
          v-model.trim="countryInput"
          @keyup="filterByCountry()"
          class="inputElem"
          placeholder="Search for a country..."
        />
      </div>

      <div class="dropdown">
        <button class="dropbutton">
          Filter by Region <span class="dropdownIcon">⌄</span>
        </button>
        <div class="dropdown-content">
          <button @click="getRegion(undefined)">All</button>
          <button @click="getRegion('Africa')">Africa</button>
          <button @click="getRegion('America')">America</button>
          <button @click="getRegion('Asia')">Asia</button>
          <button @click="getRegion('Europe')">Europe</button>
          <button @click="getRegion('Oceania')">Oceania</button>
        </div>
      </div>
    </div>

    <div class="dataWrapper">
      <DataCountry
        v-for="i in countries"
        @click="learnMore(i)"
        :countryName="i.name"
        :flagIcon="i.flags.png"
        :population="i.population"
        :capital="i.capital"
        :region="i.region"
      />
    </div>
  </div>
</template>
