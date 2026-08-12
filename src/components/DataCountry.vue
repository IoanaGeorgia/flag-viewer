<script>
export default {
  name: "DataCountry",
  props: {
    flagIcon: {
      type: String,
      required: true,
    },
    countryName: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: false,
      default:"N/A"
    },
  },
  data() {
    return {
      isLoading: true, 
    };
  },
  methods: {
    handleImageLoad() {
      this.isLoading = false; 
    },
  },
};
</script>

<template>
  <div class="countryWrapper">
    <div v-if="isLoading" class="flagLoader">
      <div class="spinner"></div>
    </div>

    <img 
      :src="flagIcon" 
      class="countryFlag" 
      :class="{ 'is-hidden': isLoading }"
      @load="handleImageLoad" 
      :alt="countryName + ' flag'"
    />
    
    <div class="countryInfoWrapper">
      <p class="countryTitle">{{ countryName }}</p>
      <p class="countryInfo">
        Population:
        <span class="countryInfoSpan">{{ population }}</span>
      </p>
      <p class="countryInfo">
        Region:
        <span class="countryInfoSpan">{{ region }}</span>
      </p>
      <p class="countryInfo">
        Capital:
        <span class="countryInfoSpan">{{ capital }}</span>
      </p>
    </div>
  </div>
</template>

