<script>
export default {
    name:'HeaderComponent',
  data() {
    return {

    }
  },
  methods:{
    toggleTheme(){
        return
    }
  }
};
</script>

<template>
  <div class="headerWrapper">
    <div class="headerTitle">Where in the world?</div>
    <button @click='toggleTheme()' class="themeButton">
      <div class="themeButtonIcon">☾ </div>Dark Mode
    </button>
  </div>
</template>

