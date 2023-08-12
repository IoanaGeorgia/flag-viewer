<script>
import CountryExtended from "./CountryExtended.vue";
import json from "./src/assets/data.json";
import DataCountry from "./DataCountry.vue";
export default {
  name: "LandingContent",
  data() {
    return {
      countryInput: "",
      region: "",
      countries: [],
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
      this.countryInput = "";
    },

    filterByCountry() {
      if (this.countryInput) {
        this.countries = this.countries.filter((obj) =>
          obj.name.toLowerCase().includes(this.countryInput.toLowerCase())
        );
      } else {
        this.countries = json;
      }
    },

    learnMore(country) {
      this.$router.push({
        name: "about",
        params: { name: country.name },
      });

      this.$store.commit("TOGGLE_DETAILS", true);
      this.detailsInfo = country;
    },
  },
  computed: {
    showDetails() {
      this.countryInput = "";
      this.countries = json;
      return this.$store.state.showDetails;
    },
  },

  components: { DataCountry, CountryExtended },
};
</script>

<template>
  <CountryExtended v-if="showDetails" :info="detailsInfo" />
  <div v-else class="landingWrapper">
    <div class="filtersWrapper">
      <div class="inputWrapper">
        <div class="inputIcon">
          <span class="material-icons"> search </span>
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
          Filter by Region
          <span class="dropdownIcon"
            ><span class="material-icons-outlined"> expand_more </span></span
          >
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
