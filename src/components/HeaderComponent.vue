<script>
export default {
    name:'HeaderComponent',
  data() {
    return {

      
        theme:''
    }
  },
  
mounted() {
        let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
        document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
},
  methods:{
toggleTheme() {
            this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
            document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
            localStorage.setItem('theme', this.theme); // stores theme value on local storage
}
  }
};
</script>

<template>
  <div class="headerWrapper">
    <div class="headerTitle">Where in the world?</div>
    <button @click="toggleTheme" aria-label="Toggle themes" class="themeButton">
      <div class="themeButtonIcon">☾ </div>Dark Mode
    </button>
  </div>
</template>

