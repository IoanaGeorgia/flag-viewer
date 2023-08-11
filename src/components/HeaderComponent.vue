<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      theme: "",
    };
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
  },
};
</script>

<template>
  <div class="headerWrapper">
    <div class="headerTitle">Where in the world?</div>
    <button @click="toggleTheme" aria-label="Toggle themes" class="themeButton">
      <div class="themeButtonIcon"><span :class= 'theme === "darkMode" ? "material-icons" : "material-icons-outlined"'>
dark_mode
</span></div>
      Dark Mode
    </button>
  </div>
</template>
