<script>
export default {
  name: "FooterComponent",
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

    goToMain() {
      this.$router.push({
        name: "home",
        path: "/",
      });
    }
  },
};
</script>

<template>
  <footer>
    <div class="headerTitle" @click="goToMain()">Where in the world?</div>
    <p class="note">All rights reserved</p>
  </footer>
</template>
