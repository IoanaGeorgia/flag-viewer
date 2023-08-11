<script>
import HeaderComponent from "./HeaderComponent.vue";
import json from "..\\assets\\data.json";

export default {
  name: "CountryExtended",
  props: {
    info: {
      required: true,
    },
  },
  data() {
    return {
      clickedBorder: false,
      countryInfoBorder: {},
    };
  },
  computed: {
    countryInfo() {
      if (this.clickedBorder) {
        return this.countryInfoBorder;
      } else {
        return this.info;
      }
    },
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "home",
        path: "/",
      });
      this.$store.commit("TOGGLE_DETAILS", false);
    },
    populationFormatter(population) {
      return population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    },
    languageFormatter(languages) {
      if (languages.length === 1) {
        return languages[0].name;
      } else {
        let languageString = [];
        for (let i of languages) {
          languageString.push(i.name);
        }
        return languageString.join(", ");
      }
    },
    goToBordering(border) {
      let borderingCountryInfo = json.filter(
        (entry) => entry.alpha3Code === border
      );
      this.countryInfoBorder = borderingCountryInfo[0];
      this.clickedBorder = true;
    },
    convertBorder(border) {
      let filteredBorderObjects = json.filter(
        (entry) => entry.alpha3Code === border
      );
      return filteredBorderObjects[0].name;
    },
  },
  components: { HeaderComponent },
};
</script>

<template>
  <div class="landingWrapper">
    <button class="goBack" @click="goBack()">← Back</button>
    <div class="detailsInnerWrapper">
      <img :src="countryInfo.flags.png" />
      <div class="detailsInfo">
        <p class="detailsTitle">{{ countryInfo.name }}</p>

        <div class="detailsText">
          <div>
            <p class="countryInfo">
              Native Name:
              <span class="countryInfoSpan">{{ countryInfo.nativeName }}</span>
            </p>
            <p class="countryInfo">
              Population:
              <span class="countryInfoSpan">{{
                populationFormatter(countryInfo.population)
              }}</span>
            </p>
            <p class="countryInfo">
              Region:
              <span class="countryInfoSpan">{{ countryInfo.region }}</span>
            </p>
            <p class="countryInfo">
              Sub Region:
              <span class="countryInfoSpan">{{ countryInfo.subregion }}</span>
            </p>
            <p class="countryInfo">
              Capital:
              <span class="countryInfoSpan">{{ countryInfo.capital }}</span>
            </p>
          </div>

          <div>
            <p class="countryInfo">
              Top Level Domain:
              <span class="countryInfoSpan"
                ><span v-for="level in countryInfo.topLevelDomain">{{
                  level
                }}</span></span
              >
            </p>
            <p class="countryInfo">
              Currencies:
              <span class="countryInfoSpan">{{
                countryInfo.currencies[0].name
              }}</span>
            </p>
            <p class="countryInfo">
              Languages:
              <span class="countryInfoSpan">{{
                languageFormatter(countryInfo.languages)
              }}</span>
            </p>
          </div>
        </div>
        <div class="borderingCountries">
           <span v-if="countryInfo.borders" class="countryInfo borderWrapper">
          <span class="borderCountriesLabel"> Border Countries: </span>
            <span>
              <button
                v-for="border in countryInfo.borders"
                @click="goToBordering(border)"
                class="countryInfoSpan borderingCountriesButton"
              >
                {{ convertBorder(border) }}
              </button></span
            >
          </span>
          <span v-else class="countryInfo">
             Border Countries: 
             <span class="countryInfoSpan"> None 

             </span>
             </span
          >
        </div>
      </div>
    </div>
  </div>
</template>
