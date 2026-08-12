<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      theme: "",
      isMobileOpen: false
    };
  },

  watch: {
    $route() {
      this.isMobileOpen = false; 
    }
  },

  mounted() {
    let localTheme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", localTheme);
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme == "darkMode" ? "" : "darkMode";
      document.documentElement.setAttribute("data-theme", this.theme);
      localStorage.setItem("theme", this.theme);
    },

    goToMain() {
      this.$router.push({
        name: "home",
        path: "/",
      });
    },
    goToMission() {
      this.$router.push({
        name: "mission",
        path: "/mission",
      });
    },

    goToCountries() {
      this.$router.push({
        path: "/countries",
      });
    },
    openMobileMenu() {
      this.isMobileOpen = !this.isMobileOpen


    }
  },
};
</script>

<template>
  <nav class="headerWrapper">
    <div class="headerTitle" @click="goToMain()" aria-label="Go to main page">Where in the world?</div>

    <div class="links">
      <button @click="goToCountries()" class="headerButton" aria-label="Go to all countries page">All countries</button>

      <button @click="goToMission()" class="headerButton" aria-label="Go to mission page">Mission</button>
      <button @click="toggleTheme" aria-label="Toggle themes" class="headerButton">
        <div class="themeButtonIcon"><span :class='theme === "darkMode" ? "material-icons" : "material-icons-outlined"'>
            dark_mode
          </span></div>
        Dark Mode
      </button>
    </div>


    <button class="mobileMenuBtn headerButton" @click="openMobileMenu()">☰</button>

    <div v-if="isMobileOpen" class="sidemenu">
      <div class="links">
        <button @click="goToCountries()" class="headerButton" aria-label="Go to all countries page">All
          countries</button>

        <button @click="goToMission()" class="headerButton" aria-label="Go to mission page">Mission</button>
        <button @click="toggleTheme" aria-label="Toggle themes" class="headerButton">
          <div class="themeButtonIcon"><span
              :class='theme === "darkMode" ? "material-icons" : "material-icons-outlined"'>
              dark_mode
            </span></div>
          Dark Mode
        </button>
      </div>
    </div>

  </nav>
</template>
